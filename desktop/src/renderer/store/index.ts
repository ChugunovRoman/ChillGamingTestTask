import { Users, users } from './Users';
import { Modal, modals } from './Modal';

export interface Stores {
  users: Users;
  modals: Modal;
}

const stores: Stores = {
  users,
  modals,
};

export default stores;
