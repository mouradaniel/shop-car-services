import { Router } from 'express';

import { createBrandController } from '../modules/cars/useCases/createBrand';
import { listBrandsController } from '../modules/cars/useCases/listBrands';

const brandsRoutes = Router();

brandsRoutes.post('/', (req, res) => {
  return createBrandController.handle(req, res);
});

brandsRoutes.get('/', (req, res) => {
  return listBrandsController.handle(req, res);
});

export { brandsRoutes };
