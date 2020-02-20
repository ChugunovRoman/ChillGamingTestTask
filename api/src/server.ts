import * as Hapi from '@hapi/hapi';
import { initRoutes } from './routes';
import { Swagger, Logger } from './plugins';

export class Server {
  private server: Hapi.Server;

  constructor(options: Hapi.ServerOptions) {
    this.server = new Hapi.Server(options);
  }

  private async register() {
    try {
      await Logger(this.server);
      await Swagger(this.server);
    } catch (error) {
      console.error('Register hapi plugins error: ', error.stack);
    }

    try {
      initRoutes(this.server);
    } catch (error) {
      console.error('Initialize routes ERROR: ', error.stack);
    }
  }

  public async start() {
    try {
      await this.register();
      await this.server.start();
      console.info(`Server is running ${this.server.info.uri}`);
      console.info(`For see REST API documentation visit it: ${this.server.info.uri}/documentation`);
    } catch (error) {
      console.error('Hapi server start ERROR: ', error.stack);
    }
  }
}
