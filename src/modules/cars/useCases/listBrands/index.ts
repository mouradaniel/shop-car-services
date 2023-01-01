import { BrandsRepository } from '../../repositories/BrandsRepository';
import { ListBrandsController } from './listBrandsController';
import { ListBradsUseCase } from './listBrandsUseCase';

const brandsRepository = new BrandsRepository();
const listBrandsUseCase = new ListBradsUseCase(brandsRepository);
const listBrandsController = new ListBrandsController(listBrandsUseCase);

export { listBrandsController };
