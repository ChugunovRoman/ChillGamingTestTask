import { BrowserWindowConstructorOptions } from 'electron';

import { Window } from './window';

const windowOptions: BrowserWindowConstructorOptions = {
  width: 600,
  height: 700,
  webPreferences: {
    sandbox: false,
    zoomFactor: 1,
    nodeIntegration: true,
    nodeIntegrationInWorker: false,
    webviewTag: false,
    webSecurity: false,
    webgl: true,
    experimentalFeatures: true,
  },
};

Window.getInstance(windowOptions);

process.on('uncaughtException', (error: Error) => {
  console.error(`uncaughtException: `, error);
});

process.on('unhandledRejection', (reason: any) => {
  console.error(`unhandledRejection: `, reason);
});
