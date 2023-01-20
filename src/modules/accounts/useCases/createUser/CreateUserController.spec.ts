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

  it('Should be able to create a new user', async () => {
    const response = await request(app).post('/users').send({
      email: 'test_create@test.com',
      password: '1234',
      document: '11122233311',
      username: 'test_user',
      name: ' Test',
    });

    expect(response.status).toBe(201);
  });

  it('Should not be able to create a new user with same email', async () => {
    await request(app).post('/users').send({
      email: 'test_same_email@test.com',
      password: '1234',
      document: '11122233366',
      username: 'test_same_email',
      name: ' Test',
    });

    const response = await request(app).post('/users').send({
      email: 'test_same_email@test.com',
      password: '1234',
      document: '11122233377',
      username: 'test_same_email',
      name: ' Test',
    });

    expect(response.status).toBe(400);
  });
});
