import { Router } from 'express';
import multer from 'multer';

import { createBrandController } from '../modules/cars/useCases/createBrand';
import { importBrandController } from '../modules/cars/useCases/importBrand';
import { listBrandsController } from '../modules/cars/useCases/listBrands';

const brandsRoutes = Router();

const upload = multer({
  dest: './tmp',
});

brandsRoutes.post('/', (req, res) => {
  return createBrandController.handle(req, res);
});

brandsRoutes.get('/', (req, res) => {
  return listBrandsController.handle(req, res);
});

brandsRoutes.post('/import', upload.single('file'), (req, res) => {
  return importBrandController.handle(req, res);
});

export { brandsRoutes };
