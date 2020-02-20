import * as Boom from '@hapi/boom';

import { fibonacci } from '../util';

export async function fibonacciController(req: Fibonacci.Request) {
  const passedArray = req.payload;

  try {
    return passedArray.map(n => fibonacci(n));
  } catch (error) {
    console.error('Calculate fibonacci error: ', error);

    return Boom.badRequest(error);
  }
}
