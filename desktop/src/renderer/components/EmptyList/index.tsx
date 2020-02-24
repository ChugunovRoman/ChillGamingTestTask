import * as React from 'react';
import { observer, inject } from 'mobx-react';

import './style.scss';
import { Button, IconPlus } from '../../Elements';

interface EmptyUserListProps {
  modals?: Store.Modal;
}

@inject('modals')
@observer
class EmptyUserList extends React.Component<EmptyUserListProps, {}> {
  props: EmptyUserListProps;

  constructor(props: EmptyUserListProps) {
    super(props);

    this.props = props;
  }

  private openModal = (event: React.MouseEvent<HTMLDivElement> & Event) => {
    this.props.modals!.isUserAddModalOpen = true;
  };
  render() {
    return (
      <div className="emptylist">
        <h1>Add first user!</h1>
        <Button className="button_ghost" icon={<IconPlus />} onClick={this.openModal} />
      </div>
    );
  }
}

export default EmptyUserList;
