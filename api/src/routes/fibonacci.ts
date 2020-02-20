import * as Hapi from '@hapi/hapi';

import { fibonacciController } from '../controllers';
import { fibonacciDoc } from '../docs';
import { fibonacciResponse, fibonacciPayload } from '../validators';
import { makeResponses } from '../util';

export function fibonacciRoutes(server: Hapi.Server): void {
  const routes: Hapi.ServerRoute[] = [
    {
      method: 'POST',
      path: '/fibonacci',
      options: {
        plugins: {
          'hapi-swagger': {
            responses: makeResponses(fibonacciResponse),
          },
        },
        validate: {
          payload: fibonacciPayload,
        },
        response: {
          schema: fibonacciResponse,
        },
        ...fibonacciDoc,
      },
      handler: fibonacciController,
    },
  ];

  server.route(routes);
}
