import { inject, injectable } from 'tsyringe';

import { Brand } from '../../entities/Brand';
import { IBrandsRepository } from '../../repositories/IBrandsRepository';

@injectable()
class ListBrandsUseCase {
  constructor(
    @inject('BrandsRepository')
    private brandsRepository: IBrandsRepository,
  ) {}

  async execute(): Promise<Brand[]> {
    const brands = await this.brandsRepository.list();

    return brands;
  }
}

export { ListBrandsUseCase };
