import * as React from 'react';

import './avatar.scss';

interface AvatarProps {
  firstName: string;
  lastName: string;
}

export const Avatar: React.FunctionComponent<AvatarProps> = props => {
  return (
    <div style={{ backgroundColor: '#f1e7fe' }} className="avatar">
      <span>{`${props.firstName.substring(0, 1).toUpperCase()}${props.lastName.substring(0, 1).toUpperCase()}`}</span>
    </div>
  );
};
