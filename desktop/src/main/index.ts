import * as Electron from 'electron';

import { Window } from './window';

const windowOptiins: Electron.BrowserWindowConstructorOptions = {
  width: 600,
  height: 700,
  webPreferences: {
    nodeIntegration: true,
  },
};

new Window(windowOptiins);

process.on('uncaughtException', (error: Error) => {
  console.error(`uncaughtException: `, error);
});

process.on('unhandledRejection', (reason: any) => {
  console.error(`unhandledRejection: `, reason);
});
