import { describe, test, expect } from '@jest/globals';
import { capitalize } from '../helpers/transformers';

describe('Main Tests', () => {
  test('Should throw an error if no argument was provided', () => {
    //@ts-ignore
    expect(() => capitalize())
      .toThrow('You must provide provide a text !');
  });
  test('Should throw an error text is 1 character', () => {
    expect(() => capitalize('a'))
      .toThrow('You must provide a string with minimum 2 characters !');
  });
  test('Should capitalize a given word', () => {
    const result = capitalize('lorem');
    expect(result).toBe('Lorem');
  });
});
