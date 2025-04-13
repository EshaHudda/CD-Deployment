const request = require('supertest');
const app = require('../myapp'); // Assuming your myapp.js exports the server instance
const { add } = require('../myapp'); // Import the add function

describe('GET /', () => {
  it('should respond with 200 OK and "Hello, World!"', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('Hello, World!\n');
    expect(response.headers['content-type']).toBe('text/plain');
  });
});

describe('add(a, b)', () => {
  it('should return the sum of two positive numbers', () => {
    expect(add(2, 3)).toBe(5);
  });

  it('should return the sum of a positive and a negative number', () => {
    expect(add(5, -2)).toBe(3);
  });

  it('should return the sum of two negative numbers', () => {
    expect(add(-1, -4)).toBe(-5);
  });

  it('should return the number itself when adding zero', () => {
    expect(add(10, 0)).toBe(10);
    expect(add(0, -5)).toBe(-5);
  });
});