// import * as Electron from 'electron';
import { observable, action, toJS, autorun } from 'mobx';

export class Users implements Store.Users {
  @observable users: Model.User[];
  @observable selectedUsersUuid: string;

  constructor() {
    this.users = [];

    this.events();
  }

  @action
  public userAdd = (user: Model.User): void => {
    this.users.push(user);

    // Electron.ipcRenderer.send('user-add', user);
  };
  @action
  public userUpdate = (data: Model.User): void => {
    for (const user of this.users) {
      user.address = data.address;
      user.dob = data.dob;
      user.firstName = data.firstName;
      user.lastName = data.lastName;
    }

    // Electron.ipcRenderer.send('user-edit', data);
  };
  @action
  public userDelete = (userUuid: string): void => {
    this.users = this.users.filter(u => u.uuid !== userUuid);

    // Electron.ipcRenderer.send('user-delete', userUuid);
  };

  private events = (): void => {
    // Electron.ipcRenderer.on('user-get', (sender, users) => {
    //   this.users = users;
    // });
  };
}

export const users = new Users();

autorun(() => {
  console.log('===================> users store: ', toJS(users));
});
