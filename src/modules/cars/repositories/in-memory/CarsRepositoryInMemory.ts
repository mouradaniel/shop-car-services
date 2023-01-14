import { ICreateCarDTO } from '@modules/cars/dtos/ICreateCarDTO';
import { Car } from '@modules/cars/infra/typeorm/entities/Car';

import { ICarsRepository } from '../ICarsRepository';

class CarsRepositoryInMemory implements ICarsRepository {
  cars: Car[] = [];

  async create({
    id,
    name,
    description,
    listPrice,
    salePrice,
    brand_id,
  }: ICreateCarDTO): Promise<Car> {
    const car = new Car();

    Object.assign(car, {
      id,
      name,
      description,
      listPrice,
      salePrice,
      brand_id,
    });

    this.cars.push(car);

    return car;
  }

  async findAll(name?: string, brand_id?: string): Promise<Car[]> {
    const cars = this.cars.filter(car => {
      if (
        (brand_id && car.brand_id === brand_id) ||
        (name && car.name === name)
      ) {
        return car;
      }
      if (!brand_id && !name) {
        return car;
      }
      return null;
    });
    return cars;
  }

  async findById(id: string): Promise<Car> {
    return this.cars.find(car => car.id === id);
  }
}

export { CarsRepositoryInMemory };
