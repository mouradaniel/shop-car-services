import { inject, injectable } from 'tsyringe';

import { Car } from '@modules/cars/infra/typeorm/entities/Car';
import { ICarsRepository } from '@modules/cars/repositories/ICarsRepository';

interface IRequest {
  name?: string;
  brand_id?: string;
}

@injectable()
class ListCarsUseCase {
  constructor(
    @inject('CarsRepository')
    private carsRepository: ICarsRepository,
  ) {}

  async execute({ name, brand_id }: IRequest): Promise<Car[]> {
    const cars = await this.carsRepository.findAll(name, brand_id);
    return cars;
  }
}

export { ListCarsUseCase };
