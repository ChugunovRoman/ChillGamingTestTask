import * as React from 'react';
import { Text, IconButton, IconX } from 'sancho';

interface EmptyUserListProps {}

const EmptyUserList: React.FunctionComponent<EmptyUserListProps> = props => {
  return (
    <div>
      <Text>There are no any user. Use can add first!</Text>
      <IconButton icon={<IconX />} label="Add user" variant="ghost" />
    </div>
  );
};

export default EmptyUserList;
