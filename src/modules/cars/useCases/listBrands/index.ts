import { BrandsRepository } from '../../repositories/implementations/BrandsRepository';
import { ListBrandsController } from './listBrandsController';
import { ListBradsUseCase } from './listBrandsUseCase';

export default (): ListBrandsController => {
  const brandsRepository = new BrandsRepository();
  const listBrandsUseCase = new ListBradsUseCase(brandsRepository);
  const listBrandsController = new ListBrandsController(listBrandsUseCase);

  return listBrandsController;
};
