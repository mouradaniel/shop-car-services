import { getRepository, Repository } from 'typeorm';

import { Brand } from '@modules/cars/entities/Brand';

import { IBrandsRepository, ICreateBrandDTO } from '../IBrandsRepository';

class BrandsRepository implements IBrandsRepository {
  private repository: Repository<Brand>;

  constructor() {
    this.repository = getRepository(Brand);
  }

  async create({ name, history }: ICreateBrandDTO): Promise<void> {
    const brand = this.repository.create({
      name,
      history,
    });

    await this.repository.save(brand);
  }

  async list(): Promise<Brand[]> {
    const brands = await this.repository.find();
    return brands;
  }

  async findByName(name: string): Promise<Brand> {
    const brand = await this.repository.findOne({ name });
    return brand;
  }
}

export { BrandsRepository };
