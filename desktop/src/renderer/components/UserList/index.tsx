import * as React from 'react';
import { observer, inject } from 'mobx-react';

import { List, Item, Avatar } from 'Elements';
import AddUserModal from '../AddUserModal';
import UserListItem from './UserListItem';

import './style.scss';
import '../../modificators.scss';

interface UserListProps {
  users?: Store.Users;
}

@inject('users')
@observer
class UserList extends React.Component<UserListProps, {}> {
  props: UserListProps;

  constructor(props: UserListProps) {
    super(props);

    this.props = props;
  }

  private addUser = () => {};

  render() {
    return (
      <React.Fragment>
        <div className="header">
          <h3 className="header__text">User Database</h3>
          <AddUserModal result={this.addUser} />
        </div>
        <List>
          <Item
            contentBefore={<Avatar firstName="Lol" lastName="Kek" />}
            primaryText="Lol Kek"
            secondaryText="Description of lol kek"
          />
          <Item
            contentBefore={<Avatar firstName="Ivan" lastName="Loh" />}
            primaryText="Ivan Loh"
            secondaryText="Description of Ivan Loh"
          />
          {this.props.users!.users.forEach(user => {
            return (
              <Item primaryText={`${user.firstName} ${user.lastName}`} secondaryText={`Date of birth: ${user.dob}`} />
            );
          })}
        </List>
      </React.Fragment>
    );
  }
}

export default UserList;
