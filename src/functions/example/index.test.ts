import request from 'supertest';
import example from './index';

describe('example route testing', () => {
  it('should return the correct response', async () => {
    expect.assertions(2);

    const response = await request(example).get('/example');

    expect(response.statusCode).toBe(200);
    expect(response.body).toStrictEqual({
      message: 'This is an example response',
    });
  });
});
