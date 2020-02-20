import * as Hapi from '@hapi/hapi';
import * as Inert from '@hapi/inert';
import * as Vision from '@hapi/vision';
import * as HapiSwagger from 'hapi-swagger';

const options = {
  host: process.env.SWAGGER_HOST,
  info: {
    title: 'api',
    version: '0.1.0',
  },
  tags: [
    {
      name: 'fibonacci',
      description: 'API interface',
    },
  ],
  jsonPath: '/swagger.json',
  swaggerUIPath: '/swaggerui/',
  documentationPath: '/documentation',
  payloadType: 'json',
  expanded: 'full',
  grouping: 'tags',
  swaggerUI: true,
  schemes: ['http'],
};

export const Swagger = async (server: Hapi.Server) => {
  await server.register([
    Inert,
    Vision,
    {
      plugin: HapiSwagger,
      options,
    },
  ]);
};
