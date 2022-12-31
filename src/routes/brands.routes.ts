import { Router } from 'express';

import { BrandsRepository } from '../modules/cars/repositories/BrandsRepository';
import { CreateBrandService } from '../modules/cars/services/CreateBrandService';

const brandsRoutes = Router();
const brandsRepository = new BrandsRepository();

brandsRoutes.post('/', (req, res) => {
  const { name, history } = req.body;

  const createBrandService = new CreateBrandService(brandsRepository);

  createBrandService.execute({ name, history });

  return res.status(201).send();
});

brandsRoutes.get('/', (req, res) => {
  const brands = brandsRepository.list();

  return res.json(brands);
});

export { brandsRoutes };
