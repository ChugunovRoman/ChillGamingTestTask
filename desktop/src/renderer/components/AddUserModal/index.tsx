import * as React from 'react';
import { observer, inject } from 'mobx-react';

import { Button, IconPlus, IconEdit, IconX } from 'Elements';
import UserForm from './AddUserForm';
import Modal from './modal';

import './style.scss';

interface AddUserModalProps {
  modals?: Store.Modal;
  result(): void;
}

@inject('modals')
@observer
class AddUserModal extends React.Component<AddUserModalProps, {}> {
  props: AddUserModalProps;

  constructor(props: AddUserModalProps) {
    super(props);

    this.props = props;
  }

  private openModal = (event: React.MouseEvent<HTMLDivElement> & Event) => {
    this.props.modals!.isUserAddModalOpen = true;
  };
  private closeModal = (event: React.MouseEvent<HTMLDivElement> & Event) => {
    this.props.modals!.isUserAddModalOpen = false;
  };
  private successClose = (event: React.MouseEvent<HTMLDivElement> & Event) => {
    console.log();
    this.props.modals!.isUserAddModalOpen = false;
  };

  render() {
    return (
      <React.Fragment>
        <Button className="button_ghost margin_right_xl" icon={<IconPlus />} onClick={this.openModal} />
        <Button onClick={() => {}} className="button button_ghost button_disabled" icon={<IconEdit />} />
        <Button onClick={() => {}} className="button button_ghost button_disabled margin_right_xl" icon={<IconX />} />
        {this.props.modals?.isUserAddModalOpen ? (
          <Modal>
            <UserForm
              isOpen={this.props.modals!.isUserAddModalOpen}
              closeModal={this.closeModal}
              addUser={this.successClose}
              title="Add user dialog"
            />
          </Modal>
        ) : null}
      </React.Fragment>
    );
  }
}

export default AddUserModal;
