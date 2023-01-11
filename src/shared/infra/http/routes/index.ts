import { Router } from 'express';

import { authenticateRoutes } from './authenticate.routes';
import { brandsRoutes } from './brands.routes';
import { carsRoutes } from './cars.routes';
import { specificationRoutes } from './specifications.routes';
import { usersRoutes } from './users.routes';

const router = Router();

router.use('/brands', brandsRoutes);
router.use('/specifications', specificationRoutes);
router.use('/users', usersRoutes);
router.use('/cars', carsRoutes);
router.use(authenticateRoutes);

export { router };
