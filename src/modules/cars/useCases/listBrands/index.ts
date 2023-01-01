import { BrandsRepository } from '../../repositories/BrandsRepository';
import { ListBrandsController } from './listBrandsController';
import { ListBradsUseCase } from './listBrandsUseCase';

const brandsRepository = BrandsRepository.getInstance();
const listBrandsUseCase = new ListBradsUseCase(brandsRepository);
const listBrandsController = new ListBrandsController(listBrandsUseCase);

export { listBrandsController };
