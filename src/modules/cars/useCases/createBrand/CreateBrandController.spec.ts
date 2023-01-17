import { hash } from 'bcrypt';
import request from 'supertest';
import { Connection } from 'typeorm';
import { v4 as uuidV4 } from 'uuid';

import { app } from '@shared/infra/http/app';
import createConnection from '@shared/infra/typeorm';

let connection: Connection;

describe('Create Brand Controller', () => {
  beforeAll(async () => {
    connection = await createConnection();
    await connection.runMigrations();

    const id = uuidV4();
    const password = await hash('admin', 7);

    await connection.query(
      `INSERT INTO USERS(id, name, email, password, document, username, "isAdmin", created_at)
        values('${id}', 'admin', 'admin@shopcar.com', '${password}', '11122233312', 'admin_shop', true, 'now()')
      `,
    );
  });

  afterAll(async () => {
    await connection.dropDatabase();
    await connection.close;
  });

  it('Should be able to create a new brand', async () => {
    const responseToken = await request(app).post('/sessions').send({
      email: 'admin@shopcar.com',
      password: 'admin',
    });

    const { token } = responseToken.body;

    const response = await request(app)
      .post('/brands')
      .send({
        name: 'Brand Supertest',
        history: 'Brand History Supertest',
      })
      .set({
        Authorization: `Bearer ${token}`,
      });

    expect(response.status).toBe(201);
  });

  it('Should not be able to create a new brand with same name', async () => {
    const responseToken = await request(app).post('/sessions').send({
      email: 'admin@shopcar.com',
      password: 'admin',
    });

    const { token } = responseToken.body;

    const response = await request(app)
      .post('/brands')
      .send({
        name: 'Brand Supertest',
        history: 'Brand History Supertest',
      })
      .set({
        Authorization: `Bearer ${token}`,
      });

    expect(response.status).toBe(400);
  });
});
