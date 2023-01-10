import { inject, injectable } from 'tsyringe';

import { ICarsRepository } from '@modules/cars/repositories/ICarsRepository';

interface IRequest {
  name: string;
  description: string;
  listPrice: number;
  salePrice: number;
}

@injectable()
class CreateCarUseCase {
  constructor(
    @inject('CarsRepository')
    private carsRepository: ICarsRepository,
  ) {}

  async execute({
    name,
    description,
    listPrice,
    salePrice,
  }: IRequest): Promise<void> {
    await this.carsRepository.create({
      name,
      description,
      listPrice,
      salePrice,
    });
  }
}

export { CreateCarUseCase };
