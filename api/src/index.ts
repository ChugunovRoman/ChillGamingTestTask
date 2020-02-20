import * as Hapi from '@hapi/hapi';

import { Server } from './server';

const options: Hapi.ServerOptions = {
  port: process.env.PORT,
  app: {},
  routes: {
    validate: {
      failAction: (request: Hapi.Request, h: Hapi.ResponseToolkit, err: Error) => {
        console.info(`Server route validate fail action`, err.name, err.message, err.stack);
        return err;
      },
    },
    response: {
      failAction: (request: Hapi.Request, h: Hapi.ResponseToolkit, err: Error) => {
        console.info(`Server route response fail action: `, err.name, err.message, err.stack);
        return err;
      },
    },
  },
};

const server = new Server(options);

server.start();
