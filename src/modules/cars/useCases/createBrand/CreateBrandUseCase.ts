import { IBrandsRepository } from '../../repositories/IBrandsRepository';

interface IRequest {
  name: string;
  history: string;
}

class CreateBrandUseCase {
  constructor(private brandsRepository: IBrandsRepository) {}

  execute({ name, history }: IRequest): void {
    const brandAlreadyExists = this.brandsRepository.findByName(name);

    if (brandAlreadyExists) {
      throw new Error('Brand Already Exists!');
    }

    this.brandsRepository.create({ name, history });
  }
}

export { CreateBrandUseCase };
