import { BrandsRepository } from '../../repositories/implementations/BrandsRepository';
import { ImportBrandController } from './ImportBrandController';
import { ImportBrandUseCase } from './ImportBrandUseCase';

export default (): ImportBrandController => {
  const brandsRepository = new BrandsRepository();
  const importBrandUseCase = new ImportBrandUseCase(brandsRepository);
  const importBrandController = new ImportBrandController(importBrandUseCase);

  return importBrandController;
};
