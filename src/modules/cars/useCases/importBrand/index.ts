import { ImportBrandController } from './ImportBrandController';
import { ImportBrandUseCase } from './ImportBrandUseCase';

const importBrandUseCase = new ImportBrandUseCase();
const importBrandController = new ImportBrandController(importBrandUseCase);

export { importBrandController };
