import request from 'supertest';
import { Connection } from 'typeorm';

import { app } from '@shared/infra/http/app';
import createConnection from '@shared/infra/typeorm';

let connection: Connection;

describe('Create User Controller', () => {
  beforeAll(async () => {
    connection = await createConnection();

    await connection.runMigrations();
  });

  afterAll(async () => {
    await connection.dropDatabase();
    await connection.close;
  });

  it('Should be able to get the current profile', async () => {
    const test = await request(app).post('/users').send({
      email: 'test_profile@test.com',
      password: '1234',
      document: '11122233344',
      username: 'test_user_profile',
      name: 'Test',
    });

    const responseSession = await request(app).post('/sessions').send({
      email: 'test_profile@test.com',
      password: '1234',
    });

    const { token } = responseSession.body;

    const response = await request(app)
      .get('/users/profile')
      .set({
        Authorization: `Bearer ${token}`,
      });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('email');
  });
});
