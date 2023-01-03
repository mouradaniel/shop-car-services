import { Brand } from '../../entities/Brand';
import { IBrandsRepository } from '../../repositories/IBrandsRepository';

class ListBradsUseCase {
  constructor(private brandsRepository: IBrandsRepository) {}

  execute(): Brand[] {
    const brands = this.brandsRepository.list();

    return brands;
  }
}

export { ListBradsUseCase };
