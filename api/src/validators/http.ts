import * as Joi from '@hapi/joi';

export const _400 = Joi.object().keys({
  statusCode: Joi.number()
    .description('Error code')
    .example(400),
  error: Joi.string()
    .description('Name of error')
    .example('Bad request'),
  message: Joi.string()
    .description('Description of error')
    .example('Invalid request params input'),
});

export const _401 = Joi.object().keys({
  statusCode: Joi.number()
    .description('Error code')
    .example(401),
  error: Joi.string()
    .description('Name of error')
    .example('Missing authentication'),
  message: Joi.string()
    .description('Description of error')
    .example('Missing authentication'),
});

export const _500 = Joi.object().keys({
  statusCode: Joi.number()
    .description('Error code')
    .example(500),
  error: Joi.string()
    .description('Name of error')
    .example('Internal Server Error'),
  message: Joi.string()
    .description('Description of error')
    .example('An internal server error occurred'),
});

export const _501 = Joi.object().keys({
  statusCode: Joi.number()
    .description('Error code')
    .example(501),
  error: Joi.string()
    .description('Name of error')
    .example('Not Implemented'),
  message: Joi.string()
    .description('Description of error')
    .example(
      'Bad response: Error: Argument passed in must be a single String of 12 bytes or a string of 24 hex characters',
    ),
});
