import { Router } from 'express';
import multer from 'multer';

import { CreateBrandController } from '../modules/cars/useCases/createBrand/CreateBrandController';
import { ImportBrandController } from '../modules/cars/useCases/importBrand/ImportBrandController';
import { ListBrandsController } from '../modules/cars/useCases/listBrands/ListBrandsController';

const brandsRoutes = Router();

const upload = multer({
  dest: './tmp',
});

const createBrandController = new CreateBrandController();
const importBrandController = new ImportBrandController();
const listBrandsController = new ListBrandsController();

brandsRoutes.post('/', createBrandController.handle);

brandsRoutes.get('/', listBrandsController.handle);

brandsRoutes.post(
  '/import',
  upload.single('file'),
  importBrandController.handle,
);

export { brandsRoutes };
