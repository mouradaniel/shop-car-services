import { Router } from 'express';

import { brandsRoutes } from './brands.routes';
import { specificationRoutes } from './specifications.routes';
import { usersRoutes } from './users.routes';

const router = Router();

router.use('/brands', brandsRoutes);
router.use('/specifications', specificationRoutes);
router.use('/users', usersRoutes);

export { router };
