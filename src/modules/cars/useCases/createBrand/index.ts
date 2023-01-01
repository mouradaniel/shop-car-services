import { BrandsRepository } from '../../repositories/BrandsRepository';
import { CreateBrandController } from './CreateBrandController';
import { CreateBrandUseCase } from './CreateBrandUseCase';

const brandsRepository = BrandsRepository.getInstance();

const createBrandUseCase = new CreateBrandUseCase(brandsRepository);

const createBrandController = new CreateBrandController(createBrandUseCase);

export { createBrandController };
