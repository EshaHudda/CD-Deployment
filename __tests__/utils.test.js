const { add } = require('../myapp'); // Import the 'add' function

describe('add', () => {
  test('should return the sum of two positive numbers', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('should return the sum of a positive and a negative number', () => {
    expect(add(5, -2)).toBe(3);
  });

  test('should return the sum of two negative numbers', () => {
    expect(add(-1, -4)).toBe(-5);
  });

  test('should return the sum of zero and a number', () => {
    expect(add(0, 5)).toBe(5);
    expect(add(-3, 0)).toBe(-3);
  });
});