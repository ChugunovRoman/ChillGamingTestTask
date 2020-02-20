import * as Joi from '@hapi/joi';

export const fibonacciPayload = Joi.array()
  .items(Joi.number())
  .description('Array of numbers for which to calculate Fibonacci')
  .example('[2, 5, 7, 10, 15, 20, 25]');
export const fibonacciResponse = Joi.array()
  .items(Joi.number())
  .description('Array of calculated fibonacci numbers')
  .example('[2, 5, 7, 10, 15, 20, 25]');
