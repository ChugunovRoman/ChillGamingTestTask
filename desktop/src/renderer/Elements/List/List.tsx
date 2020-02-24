import * as React from 'react';

import './list.scss';

interface ListProps {
  children: React.ReactNode;
  className?: string;
}

export const List: React.FunctionComponent<ListProps> = props => {
  return <div className={`list${props.className ? ` ${props.className}` : ''}`}>{props.children}</div>;
};
