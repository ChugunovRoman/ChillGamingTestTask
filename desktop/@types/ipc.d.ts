declare namespace Electron {
  interface IpcRenderer extends NodeJS.EventEmitter {
    handle(
      channel: 'user-get',
      listener: (event: IpcMainInvokeEvent, users: Model.User[]) => Promise<void> | any,
    ): void;
    handle(channel: 'user-added', listener: (event: IpcMainInvokeEvent, user: Model.User) => Promise<void> | any): void;

    handleOnce(
      channel: 'user-get',
      listener: (event: IpcMainInvokeEvent, users: Model.User[]) => Promise<void> | any,
    ): void;
    handleOnce(
      channel: 'user-added',
      listener: (event: IpcMainInvokeEvent, user: Model.User) => Promise<void> | any,
    ): void;

    on(channel: 'user-get', listener: (event: IpcMainEvent, users: Model.User[]) => void): this;
    on(channel: 'user-added', listener: (event: IpcMainEvent, user: Model.User) => void): this;

    once(channel: 'user-get', listener: (event: IpcMainEvent, users: Model.User[]) => void): this;
    once(channel: 'user-added', listener: (event: IpcMainEvent, user: Model.User) => void): this;

    removeAllListeners(channel: 'user-get'): this;
    removeAllListeners(channel: 'user-added'): this;

    removeHandler(channel: 'user-get'): void;
    removeHandler(channel: 'user-added'): void;

    removeListener(channel: 'user-get', listener: (event: IpcMainEvent, users: Model.User[]) => void): this;
    removeListener(channel: 'user-added', listener: (event: IpcMainEvent, user: Model.User) => void): this;

    send(event: 'user-add', user: Model.FrontUser): boolean;
    send(event: 'user-edit', user: Model.User): boolean;
    send(event: 'user-delete', userUuid: string): boolean;
  }

  interface IpcMain extends NodeJS.EventEmitter {
    handle(
      channel: 'user-add',
      listener: (event: IpcMainInvokeEvent, user: Model.FrontUser) => Promise<void> | any,
    ): void;
    handle(channel: 'user-edit', listener: (event: IpcMainInvokeEvent, user: Model.User) => Promise<void> | any): void;
    handle(
      channel: 'user-delete',
      listener: (event: IpcMainInvokeEvent, userUuid: string) => Promise<void> | any,
    ): void;

    handleOnce(
      channel: 'user-add',
      listener: (event: IpcMainInvokeEvent, user: Model.FrontUser) => Promise<void> | any,
    ): void;
    handleOnce(
      channel: 'user-edit',
      listener: (event: IpcMainInvokeEvent, user: Model.User) => Promise<void> | any,
    ): void;
    handleOnce(
      channel: 'user-delete',
      listener: (event: IpcMainInvokeEvent, userUuid: string) => Promise<void> | any,
    ): void;

    on(channel: 'user-add', listener: (event: IpcMainEvent, user: Model.FrontUser) => void): this;
    on(channel: 'user-edit', listener: (event: IpcMainEvent, user: Model.User) => void): this;
    on(channel: 'user-delete', listener: (event: IpcMainEvent, userUuid: string) => void): this;

    once(channel: 'user-add', listener: (event: IpcMainEvent, user: Model.FrontUser) => void): this;
    once(channel: 'user-edit', listener: (event: IpcMainEvent, user: Model.User) => void): this;
    once(channel: 'user-delete', listener: (event: IpcMainEvent, userUuid: string) => void): this;

    removeAllListeners(channel: 'user-add'): this;
    removeAllListeners(channel: 'user-edit'): this;
    removeAllListeners(channel: 'user-delete'): this;

    removeHandler(channel: 'user-add'): void;
    removeHandler(channel: 'user-edit'): void;
    removeHandler(channel: 'user-delete'): void;

    removeListener(channel: 'user-add', listener: (event: IpcMainEvent, user: Model.FrontUser) => void): this;
    removeListener(channel: 'user-edit', listener: (event: IpcMainEvent, user: Model.User) => void): this;
    removeListener(channel: 'user-delete', listener: (event: IpcMainEvent, userUuid: string) => void): this;
  }

  interface WebContents extends NodeJS.EventEmitter {
    send(channel: 'user-get', users: Model.User[]): void;
    send(channel: 'user-added', user: Model.User): void;
  }
}
