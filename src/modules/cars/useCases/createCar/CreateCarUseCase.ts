import { inject, injectable } from 'tsyringe';

import { Car } from '@modules/cars/infra/typeorm/entities/Car';
import { ICarsRepository } from '@modules/cars/repositories/ICarsRepository';

interface IRequest {
  name: string;
  description: string;
  listPrice: number;
  salePrice: number;
  brand_id: string;
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
    brand_id,
  }: IRequest): Promise<Car> {
    const car = await this.carsRepository.create({
      name,
      description,
      listPrice,
      salePrice,
      brand_id,
    });

    return car;
  }
}

export { CreateCarUseCase };
