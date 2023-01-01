import { Router } from 'express';

import { brandsRoutes } from './brands.routes';
import { specificationRoutes } from './specifications.routes';

const router = Router();

router.use('/brands', brandsRoutes);
router.use('/specifications', specificationRoutes);

export { router };
