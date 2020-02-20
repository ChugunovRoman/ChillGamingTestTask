declare namespace Fibonacci {
  type _Request = import('@hapi/hapi').Request;

  interface Request extends _Request {
    payload: number[];
  }
}
