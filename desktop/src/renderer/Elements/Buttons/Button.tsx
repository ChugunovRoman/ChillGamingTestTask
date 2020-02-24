import * as React from 'react';

import { IconWrapper } from '..';

import './button.scss';

interface ButtonProps {
  icon?: React.ReactNode;
  className?: string;
  children?: string;

  onClick(e: React.MouseEvent<HTMLDivElement>): void;
}

export const Button: React.FunctionComponent<ButtonProps> = props => {
  return (
    <div className={`button${props.className ? ` ${props.className}` : ''}`} onClick={e => props.onClick(e)}>
      {props.icon ? <IconWrapper className="button__icon">{props.icon}</IconWrapper> : null}
      {props.children ? <span>{props.children}</span> : null}
    </div>
  );
};
