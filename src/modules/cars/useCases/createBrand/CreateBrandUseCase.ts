import { IBrandsRepository } from '../../repositories/IBrandsRepository';

interface IRequest {
  name: string;
  history: string;
}

class CreateBrandUseCase {
  constructor(private brandsRepository: IBrandsRepository) {}

  async execute({ name, history }: IRequest): Promise<void> {
    const brandAlreadyExists = await this.brandsRepository.findByName(name);

    if (brandAlreadyExists) {
      throw new Error('Brand Already Exists!');
    }

    await this.brandsRepository.create({ name, history });
  }
}

export { CreateBrandUseCase };
