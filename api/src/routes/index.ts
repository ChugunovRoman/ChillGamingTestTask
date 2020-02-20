import * as Hapi from '@hapi/hapi';
import { fibonacciRoutes } from './fibonacci';
import { forbidden } from './forbidden';

export function initRoutes(server: Hapi.Server) {
  fibonacciRoutes(server);
  forbidden(server);
}
