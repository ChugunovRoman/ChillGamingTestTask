import * as React from 'react';
import { ipcRenderer } from 'electron';
import { observer, inject } from 'mobx-react';

import { formatDate } from '../../../utils';
import { List, Item, Avatar } from '../../Elements';
import AddUserModal from '../AddUserModal';
import EmptyList from '../EmptyList';

import './style.scss';
import '../../modificators.scss';

interface UserListProps {
  users?: Store.Users;
  modals?: Store.Modal;
}

@inject('modals')
@inject('users')
@observer
class UserList extends React.Component<UserListProps, {}> {
  props: UserListProps;

  constructor(props: UserListProps) {
    super(props);

    this.props = props;
  }

  private addUser = (user: Model.FrontUser) => {
    ipcRenderer.send('user-add', user);
  };
  private selectUser = (userUuid: string) => {
    const currentUser = this.props.users!.users.find(u => u.uuid === userUuid);

    if (!currentUser) {
      return;
    }

    this.props.users!.selectedUser = { ...currentUser };
  };
  private editUser = (userUuid: string) => {
    this.props.modals!.isUserAddModalOpen = true;
  };

  render() {
    return (
      <React.Fragment>
        <div className="header">
          <h3 className="header__text text_invert">User Database</h3>
          <AddUserModal result={this.addUser} />
        </div>
        {this.props.users!.users.length > 0 ? (
          <List>
            {this.props.users!.users.map((user, index) => {
              return (
                <Item
                  selected={!!(this.props.users!.selectedUser && this.props.users!.selectedUser.uuid === user.uuid)}
                  key={index}
                  uuid={user.uuid}
                  onClick={this.selectUser}
                  onDoubleClick={this.editUser}
                  contentBefore={<Avatar firstName={user.firstName} lastName={user.lastName} />}
                  primaryText={`${user.firstName} ${user.lastName}`}
                  secondaryText={`Date of birth: ${formatDate(user.dob, 'dd.mm.yyyy')}`}
                />
              );
            })}
          </List>
        ) : (
          <EmptyList />
        )}
      </React.Fragment>
    );
  }
}

export default UserList;
