import { inject, injectable } from 'tsyringe';

import { IBrandsRepository } from '@modules/cars/repositories/IBrandsRepository';
import { AppError } from '@shared/errors/AppError';

interface IRequest {
  name: string;
  history: string;
}

@injectable()
class CreateBrandUseCase {
  constructor(
    @inject('BrandsRepository')
    private brandsRepository: IBrandsRepository,
  ) {}

  async execute({ name, history }: IRequest): Promise<void> {
    const brandAlreadyExists = await this.brandsRepository.findByName(name);

    if (brandAlreadyExists) {
      throw new AppError('Brand Already Exists!');
    }

    await this.brandsRepository.create({ name, history });
  }
}

export { CreateBrandUseCase };
