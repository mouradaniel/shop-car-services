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
    id,
    name,
    description,
    listPrice,
    salePrice,
    brand_id,
    specifications,
  }: ICreateCarDTO): Promise<Car> {
    const car = this.repository.create({
      id,
      name,
      description,
      listPrice,
      salePrice,
      brand_id,
      specifications,
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

  async findById(id: string): Promise<Car> {
    const car = await this.repository.findOne(id);
    return car;
  }
}

export { CarsRepository };
