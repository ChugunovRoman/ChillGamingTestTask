import * as React from 'react';

import { getRandom, defaultColors } from 'Utils';
import './avatar.scss';

interface AvatarProps {
  firstName: string;
  lastName: string;
}

export const Avatar: React.FunctionComponent<AvatarProps> = props => {
  return (
    <div style={{ backgroundColor: defaultColors[getRandom(defaultColors.length)] }} className="avatar">
      <span>{`${props.firstName.substring(0, 1).toUpperCase()}${props.lastName.substring(0, 1).toUpperCase()}`}</span>
    </div>
  );
};
