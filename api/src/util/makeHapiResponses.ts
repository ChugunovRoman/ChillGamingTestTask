import { _400, _401, _500, _501 } from '../validators';

export const makeResponses = (schema?: any) => ({
  '200': {
    description: 'OK',
    schema,
  },
  '400': {
    description: 'Ошибка в запросе клиента',
    schema: _400,
  },
  '401': {
    description: 'Ошибка авторизации',
    schema: _401,
  },
  '500': {
    description: 'Внутренняя ошибка сервера',
    schema: _500,
  },
  '501': {
    description: 'Внутренняя ошибка сервера (не реализован функционал)',
    schema: _501,
  },
});
