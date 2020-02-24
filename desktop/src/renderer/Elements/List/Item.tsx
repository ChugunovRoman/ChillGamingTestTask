import * as React from 'react';

import './item.scss';

interface ItemProps {
  uuid: string;
  primaryText: string;
  secondaryText: string;
  selected?: boolean;
  contentBefore?: React.ReactNode;
  contentAfter?: React.ReactNode;
  className?: string;

  onClick(userUuid: string): void;
  onDoubleClick(userUuid: string): void;
}

export const Item: React.FunctionComponent<ItemProps> = props => {
  return (
    <div
      className={`item${props.className ? ` ${props.className}` : ''}${props.selected ? ' item_select' : ''}`}
      onDoubleClick={e => props.onDoubleClick(props.uuid)}
      onClick={e => props.onClick(props.uuid)}
    >
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
