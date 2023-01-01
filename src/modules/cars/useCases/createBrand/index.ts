import { BrandsRepository } from '../../repositories/BrandsRepository';
import { CreateBrandController } from './CreateBrandController';
import { CreateBrandUseCase } from './CreateBrandUseCase';

const brandsRepository = new BrandsRepository();

const createBrandUseCase = new CreateBrandUseCase(brandsRepository);

const createBrandController = new CreateBrandController(createBrandUseCase);

export { createBrandController };
