declare namespace Store {
  interface Users {
    users: Model.User[];

    userAdd(user: Model.User): void;
    userUpdate(data: Model.User): void;
    userDelete(userUuid: string): void;
  }

  interface Modal {
    isUserAddModalOpen: boolean;

    openUserModal(): void;
    closeUserModal(): void;
  }
}
