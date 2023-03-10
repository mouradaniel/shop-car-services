import { hash } from 'bcrypt';
import request from 'supertest';
import { Connection } from 'typeorm';
import { v4 as uuidV4 } from 'uuid';

import { app } from '@shared/infra/http/app';
import createConnection from '@shared/infra/typeorm';

let connection: Connection;

describe('List Brand Controller', () => {
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

  it('Should be able to list all brands', async () => {
    const responseToken = await request(app).post('/sessions').send({
      email: 'admin@shopcar.com',
      password: 'admin',
    });

    const { token } = responseToken.body;

    await request(app)
      .post('/brands')
      .send({
        name: 'Brand Supertest',
        history: 'Brand History Supertest',
      })
      .set({
        Authorization: `Bearer ${token}`,
      });

    const response = await request(app).get('/brands');

    expect(response.status).toBe(200);
    expect(response.body.length).toBe(1);
    expect(response.body[0]).toHaveProperty('id');
    expect(response.body[0].name).toEqual('Brand Supertest');
  });
});
