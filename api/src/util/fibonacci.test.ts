import { fibonacci } from './fibonacci';

describe('test calc fibonacci', () => {
  test('Successful scenario once call', () => {
    const result = fibonacci(7);

    expect(result).toEqual(13);
  });
  test('Successful scenario array call', () => {
    const input = [2, 5, 7, 10, 13, 15, 20, 25];
    const result = input.map(n => fibonacci(n));

    expect(result).toEqual([1, 5, 13, 55, 233, 610, 6765, 75025]);
  });
});
