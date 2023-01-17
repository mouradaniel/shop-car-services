import 'reflect-metadata';
import 'dotenv/config';

import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import sweaggerUi from 'swagger-ui-express';

import { AppError } from '@shared/errors/AppError';
import createConnection from '@shared/infra/typeorm';

import '@shared/container';
import swaggerFile from '../../../swagger.json';
import { router } from './routes';

createConnection();
const app = express();

app.use(express.json());

app.use('/docs', sweaggerUi.serve, sweaggerUi.setup(swaggerFile));

app.use(router);

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  if (error instanceof AppError) {
    return res.status(error.statusCode).json({
      message: error.message,
    });
  }

  return res.status(500).json({
    status: 'error',
    messagE: `Internal server error - ${error.message}`,
  });

  next();
});

export { app };
