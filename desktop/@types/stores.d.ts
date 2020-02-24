declare namespace Store {
  interface Users {
    users: Model.User[];
    selectedUser: Model.User | null;

    userUpdate(data: Model.User): void;
    selectedUserDelete(): void;
    selectedUserEdit(): void;
    userDelete(userUuid: string): void;
  }

  interface Modal {
    isUserAddModalOpen: boolean;

    openUserModal(): void;
    closeUserModal(): void;
  }
}
