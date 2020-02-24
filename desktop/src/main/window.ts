import { BrowserWindow, app, BrowserWindowConstructorOptions, Event, Menu } from 'electron';
import * as path from 'path';
import * as url from 'url';

import { isDev } from '../utils';
import { registerIpc } from './icp';

export class Window {
  private static _instance: Window;
  private _window: BrowserWindow | null;
  private windowOptions: BrowserWindowConstructorOptions;

  private constructor(options: BrowserWindowConstructorOptions) {
    this._window = null;
    this.windowOptions = options;

    app
      .on('ready', this.createWindow)
      .on('window-all-closed', this.windowAllClosedHandler)
      .on('second-instance', this.secondInstanceHandler)
      .on('activate', this.activeHandler);
  }

  public createWindow = async () => {
    const isSingleInstance = app.requestSingleInstanceLock();

    if (!isSingleInstance) {
      app.quit();

      return;
    }

    this._window = new BrowserWindow(this.windowOptions);

    const htmlFilePathDev = `http://localhost:3001`;
    const htmlFilePathProd = url.format({
      pathname: path.resolve(__dirname, '../renderer/index.html'),
      protocol: 'file',
      slashes: true,
    });

    this._window.loadURL(isDev ? htmlFilePathDev : htmlFilePathProd);
    isDev && this._window.webContents.openDevTools();

    this._window.on('closed', () => (this._window = null));

    Menu.setApplicationMenu(null);

    await registerIpc();
  };

  public static getInstance(options?: BrowserWindowConstructorOptions): Window {
    if (Window._instance) {
      return Window._instance;
    }

    const defaultOptions: BrowserWindowConstructorOptions = {
      width: 600,
      height: 700,
      webPreferences: {
        nodeIntegration: true,
      },
    };

    Window._instance = new Window(options ? options : defaultOptions);

    return Window._instance;
  }
  public get window(): BrowserWindow | null {
    return this._window;
  }

  private windowAllClosedHandler = () => {
    if (process.platform !== 'darwin') {
      app.quit();
    }
  };
  private activeHandler = () => {
    if (window === null) {
      this.createWindow();
    }
  };
  private secondInstanceHandler = (event: Event, argv: string[], workingDirectory: string) => {
    if (this._window === null) {
      this.createWindow();

      return;
    }

    this._window.focus();
  };
}
