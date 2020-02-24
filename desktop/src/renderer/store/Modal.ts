import { observable, action } from 'mobx';

export class Modal implements Store.Modal {
  @observable isUserAddModalOpen: boolean;
  @observable isConfirmDeleteUserModalOpen: boolean;

  constructor() {
    this.isUserAddModalOpen = false;
    this.isConfirmDeleteUserModalOpen = false;
  }

  @action
  public openUserModal = (): void => {
    this.isUserAddModalOpen = true;
  };
  @action
  public closeUserModal = (): void => {
    this.isUserAddModalOpen = false;
  };

  @action
  public openDeleteUserModal = (): void => {
    this.isConfirmDeleteUserModalOpen = true;
  };
  @action
  public closeDeleteUserModal = (): void => {
    this.isConfirmDeleteUserModalOpen = false;
  };
}

export const modals = new Modal();
