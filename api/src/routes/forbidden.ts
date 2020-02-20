import * as Hapi from '@hapi/hapi';
import * as Boom from '@hapi/boom';

export function forbidden(server: Hapi.Server): void {
  const routes: Hapi.ServerRoute[] = [
    {
      method: '*',
      path: '/{p*}',
      handler: async () => {
        return Boom.forbidden();
      },
    },
  ];

  server.route(routes);
}
