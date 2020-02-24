import { observable, action } from 'mobx';

export class Modal implements Store.Modal {
  @observable isUserAddModalOpen: boolean;

  constructor() {
    this.isUserAddModalOpen = false;
  }

  @action
  public openUserModal = (): void => {
    this.isUserAddModalOpen = true;
  };
  @action
  public closeUserModal = (): void => {
    this.isUserAddModalOpen = false;
  };
}

export const modals = new Modal();
