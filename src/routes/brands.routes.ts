import { Router } from 'express';

import { BrandsRepository } from '../repositories/BrandsRepository';

const brandsRoutes = Router();
const brandsRepository = new BrandsRepository();

brandsRoutes.post('/', (req, res) => {
  const { name, history } = req.body;

  brandsRepository.create({ name, history });

  return res.status(201).send();
});

brandsRoutes.get('/', (req, res) => {
  const brands = brandsRepository.list();

  return res.json(brands);
});

export { brandsRoutes };
