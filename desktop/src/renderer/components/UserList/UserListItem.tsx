import * as React from 'react';
import { Divider, Avatar, ListItem, IconButton, IconX, IconDelete, IconEdit2, IconRadio } from 'sancho';

interface UserListItemProps {
  firstName: string;
  lastName: string;
  address: string;
}

const UserListItem: React.FunctionComponent<UserListItemProps> = props => {
  return (
    <React.Fragment>
      <ListItem
        contentBefore={<Avatar size="md" name={`${props.firstName} ${props.lastName}`} />}
        primary={`${props.firstName} ${props.lastName}`}
        wrap={false}
        secondary={props.address}
        contentAfter={
          <React.Fragment>
            <IconButton icon={<IconEdit2 />} label="Edit selected user" variant="ghost" />
            <IconButton icon={<IconX />} label="Delete selected user" variant="ghost" />
          </React.Fragment>
        }
      />
      <Divider />
    </React.Fragment>
  );
};

export default UserListItem;
