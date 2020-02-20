import * as Hapi from '@hapi/hapi';

const options = {
  reporters: {
    console: [
      {
        module: 'good-squeeze',
        name: 'Squeeze',
        args: [
          {
            response: '*',
            log: '*',
          },
        ],
      },
      {
        module: 'good-console',
      },
      'stdout',
    ],
  },
};

export const Logger = async (server: Hapi.Server) => {
  await server.register({
    plugin: require('good'),
    options,
  });
};
