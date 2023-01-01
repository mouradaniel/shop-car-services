import { BrandsRepository } from '../../repositories/implementations/BrandsRepository';
import { ImportBrandController } from './ImportBrandController';
import { ImportBrandUseCase } from './ImportBrandUseCase';

const brandsRepository = BrandsRepository.getInstance();
const importBrandUseCase = new ImportBrandUseCase(brandsRepository);
const importBrandController = new ImportBrandController(importBrandUseCase);

export { importBrandController };
