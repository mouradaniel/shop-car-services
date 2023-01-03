import { Router } from 'express';
import multer from 'multer';

import { CreateBrandController } from '../modules/cars/useCases/createBrand/CreateBrandController';
import { ImportBrandController } from '../modules/cars/useCases/importBrand/ImportBrandController';
import listBrandsController from '../modules/cars/useCases/listBrands';

const brandsRoutes = Router();

const upload = multer({
  dest: './tmp',
});

const createBrandController = new CreateBrandController();
const importBrandController = new ImportBrandController();

brandsRoutes.post('/', createBrandController.handle);

brandsRoutes.get('/', (req, res) => {
  return listBrandsController().handle(req, res);
});

brandsRoutes.post(
  '/import',
  upload.single('file'),
  importBrandController.handle,
);

export { brandsRoutes };
