import * as Electron from 'electron';
import * as path from 'path';
import * as url from 'url';

export class Window {
  private window: Electron.BrowserWindow | null;
  private windowOptions: Electron.BrowserWindowConstructorOptions;

  constructor(options: Electron.BrowserViewConstructorOptions) {
    this.window = null;
    this.windowOptions = options;

    Electron.app
      .on('ready', this.createWindow)
      .on('window-all-closed', this.windowAllClosedHandler)
      .on('second-instance', this.secondInstancehandler)
      .on('activate', this.activeHandler);
  }

  public createWindow() {
    const isSingleInstance = Electron.app.requestSingleInstanceLock();

    if (!isSingleInstance) {
      Electron.app.quit();

      return;
    }

    this.window = new Electron.BrowserWindow(this.windowOptions);
    this.window.setMenuBarVisibility(false);
    this.window.setMenu(null);

    const htmlFilePathProd = 'localhost:3001';
    const htmlFilePathDev = url.format({
      pathname: path.resolve('dist/renderer/index.html'),
      protocol: 'file:',
      slashes: true,
    });

    this.window.loadURL(process.env.NODE_ENV !== 'production' ? htmlFilePathDev : htmlFilePathProd);
    this.window.webContents.openDevTools();

    this.window.on('closed', () => (window = null));
  }

  private windowAllClosedHandler() {
    if (process.platform !== 'darwin') {
      Electron.app.quit();
    }
  }
  private activeHandler() {
    if (window === null) {
      this.createWindow();
    }
  }
  private secondInstancehandler(event: Electron.Event, argv: string[], workingDirectory: string) {
    if (this.window === null) {
      this.createWindow();

      return;
    }

    this.window.focus();
  }
}
