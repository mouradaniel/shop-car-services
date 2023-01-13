import { getRepository, Repository } from 'typeorm';

import { ICreateCarDTO } from '@modules/cars/dtos/ICreateCarDTO';
import { ICarsRepository } from '@modules/cars/repositories/ICarsRepository';

import { Car } from '../entities/Car';

class CarsRepository implements ICarsRepository {
  private repository: Repository<Car>;

  constructor() {
    this.repository = getRepository(Car);
  }

  async create({
    name,
    description,
    listPrice,
    salePrice,
    brand_id,
  }: ICreateCarDTO): Promise<Car> {
    const car = this.repository.create({
      name,
      description,
      listPrice,
      salePrice,
      brand_id,
    });

    await this.repository.save(car);

    return car;
  }

  async findAll(name?: string, brand_id?: string): Promise<Car[]> {
    const carsQuery = await this.repository.createQueryBuilder('c');

    if (name) {
      carsQuery.andWhere('name = :name', { name });
    }

    if (brand_id) {
      carsQuery.andWhere('brand_id = :brand_id', { brand_id });
    }

    const cars = await carsQuery.getMany();

    return cars;
  }
}

export { CarsRepository };
