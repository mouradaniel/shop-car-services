import 'reflect-metadata';

import express from 'express';
import sweaggerUi from 'swagger-ui-express';

import { router } from './routes';
import swaggerFile from './swagger.json';

import './database';

const app = express();

app.use(express.json());

app.use('/docs', sweaggerUi.serve, sweaggerUi.setup(swaggerFile));

app.use(router);

app.listen(3000, () => {
  console.log('Server is running on 3000');
});
