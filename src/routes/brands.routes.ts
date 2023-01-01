import { Router } from 'express';

import { BrandsRepository } from '../modules/cars/repositories/BrandsRepository';
import { createBrandController } from '../modules/cars/useCases/createBrand';

const brandsRoutes = Router();
const brandsRepository = new BrandsRepository();

brandsRoutes.post('/', (req, res) => {
  return createBrandController.handle(req, res);
});

brandsRoutes.get('/', (req, res) => {
  const brands = brandsRepository.list();

  return res.json(brands);
});

export { brandsRoutes };
