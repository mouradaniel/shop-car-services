import 'reflect-metadata';

import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import sweaggerUi from 'swagger-ui-express';

import { router } from './routes';
import swaggerFile from './swagger.json';

import './database';

import './shared/container';
import { AppError } from './errors/AppError';

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

app.listen(3000, () => {
  console.log('Server is running on 3000');
});
