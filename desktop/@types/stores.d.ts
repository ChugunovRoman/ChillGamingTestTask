declare namespace Store {
  interface Users {
    users: Model.User[];
    selectedUser: Model.User | null;
    newUser: Model.FrontUser;

    userUpdate(data: Model.User): void;
    selectedUserDelete(): void;
    selectedUserEdit(): void;
    userDelete(userUuid: string): void;
  }

  interface Modal {
    isUserAddModalOpen: boolean;
    isConfirmDeleteUserModalOpen: boolean;

    openUserModal(): void;
    closeUserModal(): void;
    openDeleteUserModal(): void;
    closeDeleteUserModal(): void;
  }
}
