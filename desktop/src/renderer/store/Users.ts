import { ipcRenderer } from 'electron';
import { observable, action, toJS, autorun } from 'mobx';

export class Users implements Store.Users {
  @observable users: Model.User[];
  @observable selectedUser: Model.User | null;

  constructor() {
    this.users = [];

    this.events();
  }

  @action
  public userUpdate = (data: Model.User): void => {
    console.log('userUpdate: ', this.selectedUser, data);
    for (const user of this.users) {
      if (user.uuid === data.uuid) {
        user.address = data.address;
        user.dob = data.dob;
        user.firstName = data.firstName;
        user.lastName = data.lastName;
      }
    }

    ipcRenderer.send('user-edit', data);
  };
  @action
  public userDelete = (userUuid: string): void => {
    this.users = this.users.filter(u => u.uuid !== userUuid);

    ipcRenderer.send('user-delete', userUuid);
  };
  @action
  public selectedUserEdit = (): void => {
    if (!this.selectedUser) {
      return;
    }

    console.log('selectedUserEdit: ', this.selectedUser);

    const data = this.selectedUser;

    for (const user of this.users) {
      if (user.uuid === data.uuid) {
        user.address = data.address;
        user.dob = data.dob;
        user.firstName = data.firstName;
        user.lastName = data.lastName;
      }
    }

    ipcRenderer.send('user-edit', data);
  };
  @action
  public selectedUserDelete = (): void => {
    if (!this.selectedUser) {
      return;
    }

    this.users = this.users.filter(u => u.uuid !== this.selectedUser!.uuid);

    ipcRenderer.send('user-delete', this.selectedUser!.uuid);

    this.selectedUser = null;
  };

  private events = (): void => {
    ipcRenderer.on('user-get', (sender, users) => {
      this.users = users;
    });
    ipcRenderer.on('user-added', (sender, user) => {
      this.users.push(user);
    });
  };
}

export const users = new Users();

autorun(() => {
  console.log('===================> users store: ', toJS(users));
});
