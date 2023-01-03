import { Router } from 'express';
import multer from 'multer';

import { CreateBrandController } from '../modules/cars/useCases/createBrand/CreateBrandController';
import importBrandController from '../modules/cars/useCases/importBrand';
import listBrandsController from '../modules/cars/useCases/listBrands';

const brandsRoutes = Router();

const upload = multer({
  dest: './tmp',
});

const createBrandController = new CreateBrandController();

brandsRoutes.post('/', createBrandController.handle);

brandsRoutes.get('/', (req, res) => {
  return listBrandsController().handle(req, res);
});

brandsRoutes.post('/import', upload.single('file'), (req, res) => {
  return importBrandController().handle(req, res);
});

export { brandsRoutes };
