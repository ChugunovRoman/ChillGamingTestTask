import * as React from 'react';
import { observer, inject } from 'mobx-react';

import { Button, IconPlus, IconEdit, IconX } from '../../Elements';
import UserForm from './AddUserForm';
import ConfirmForm from './ConfirmForm';
import Modal from './modal';

import './style.scss';

interface AddUserModalProps {
  users?: Store.Users;
  modals?: Store.Modal;
  result(user: Model.FrontUser): void;
}

@inject('modals')
@inject('users')
@observer
class AddUserModal extends React.Component<AddUserModalProps, {}> {
  props: AddUserModalProps;

  constructor(props: AddUserModalProps) {
    super(props);

    this.props = props;
  }

  private deleteUser = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    this.props.users!.selectedUserDelete();
  };
  private editUser = (user: Model.User) => {
    this.props.users!.selectedUserEdit();
  };
  private openModal = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    this.props.users!.selectedUser = null;
    this.props.modals!.isUserAddModalOpen = true;
  };
  private openModalForUpdate = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    this.props.modals!.isUserAddModalOpen = true;
  };
  private closeModal = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    this.props.modals!.isUserAddModalOpen = false;
  };
  private successClose = (user: Model.FrontUser) => {
    this.props.result(user);
    this.props.modals!.isUserAddModalOpen = false;
  };

  private openConfirmModal = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    this.props.modals!.isConfirmDeleteUserModalOpen = true;
  };
  private closeConfirmModal = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    this.props.modals!.isConfirmDeleteUserModalOpen = false;
  };
  private successConfirmHandle = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    this.deleteUser(event);
    this.props.modals!.isConfirmDeleteUserModalOpen = false;
  };

  render() {
    return (
      <React.Fragment>
        <Button className="button_ghost margin_right_xl" icon={<IconPlus />} onClick={this.openModal} />
        <Button
          onClick={this.openModalForUpdate}
          className={`button button_ghost${this.props.users!.selectedUser ? '' : ' button_disabled'}`}
          icon={<IconEdit />}
        />
        <Button
          onClick={this.openConfirmModal}
          className={`button button_ghost margin_right_xl${this.props.users!.selectedUser ? '' : ' button_disabled'}`}
          icon={<IconX />}
        />
        {this.props.modals!.isConfirmDeleteUserModalOpen ? (
          <ConfirmForm
            title="Are you sure you want to delete the user?"
            success={this.successConfirmHandle}
            close={this.closeConfirmModal}
          />
        ) : null}
        {this.props.modals?.isUserAddModalOpen ? (
          <Modal>
            <UserForm
              isOpen={this.props.modals!.isUserAddModalOpen}
              closeModal={this.closeModal}
              editUser={this.editUser}
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
