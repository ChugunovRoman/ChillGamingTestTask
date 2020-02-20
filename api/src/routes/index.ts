import * as Hapi from '@hapi/hapi';
import { fibonacciRoutes } from './fibonacci';

export function initRoutes(server: Hapi.Server) {
  fibonacciRoutes(server);
}
