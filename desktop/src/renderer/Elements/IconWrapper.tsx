import * as React from 'react';

interface IconWrapperProps {
  children: React.ReactNode;
  className?: string;
  size?: number;
  color?: string;
}

export const IconWrapper: React.FunctionComponent<IconWrapperProps> = props => {
  return (
    <div
      style={{ color: props.color, height: props.size, width: props.size }}
      className={`${props.className ? `${props.className}` : ''}`}
    >
      {props.children}
    </div>
  );
};
