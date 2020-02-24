import * as React from 'react';

import './item.scss';

interface ItemProps {
  primaryText: string;
  secondaryText: string;
  contentBefore?: React.ReactNode;
  contentAfter?: React.ReactNode;
  className?: string;
}

export const Item: React.FunctionComponent<ItemProps> = props => {
  return (
    <div className={`item${props.className ? ` ${props.className}` : ''}`}>
      {props.contentBefore ? <div className="item__content_left">{props.contentBefore}</div> : null}
      <div className="item__content">
        <span>{props.primaryText}</span>
        <br />
        <span>{props.secondaryText}</span>
      </div>
      {props.contentAfter ? <div className="item__content_right">{props.contentAfter}</div> : null}
    </div>
  );
};
