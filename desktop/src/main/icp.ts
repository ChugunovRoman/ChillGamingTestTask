import { ipcMain } from 'electron';

import { Window } from './window';
import Users from './Users';

export async function registerIpc() {
  const window = Window.getInstance();

  ipcMain.on('user-add', (event, user) => {
    const userUuid = Users.addUser(user);

    window.window!.webContents.send('user-added', { uuid: userUuid, ...user });
  });
  ipcMain.on('user-edit', (event, user) => {
    Users.editUser(user);
  });
  ipcMain.on('user-delete', (event, userUuid) => {
    console.log('user-delete, uuid: ', userUuid);
    Users.deleteUser(userUuid);
  });

  const users = await Users.getUsers();

  window.window?.webContents.on('did-finish-load', () => {
    window.window!.webContents.send('user-get', users);
  });
}
