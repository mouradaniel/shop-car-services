import { DataSource } from 'typeorm';

const dataSource = new DataSource({
  type: 'postgres',
  host: 'database',
  port: 5432,
  username: 'test',
  password: '1234',
  database: 'shop-car',
});

dataSource.initialize();
