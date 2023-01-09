import { Brand } from '@modules/cars/infra/typeorm/entities/Brand';

import { IBrandsRepository, ICreateBrandDTO } from '../IBrandsRepository';

class BrandsRepositoryInMemory implements IBrandsRepository {
  brands: Brand[] = [];

  async findByName(name: string): Promise<Brand> {
    const brand = this.brands.find(brand => brand.name === name);
    return brand;
  }

  async list(): Promise<Brand[]> {
    const { brands } = this;
    return brands;
  }

  async create({ name, history }: ICreateBrandDTO): Promise<void> {
    const brand = new Brand();

    Object.assign(brand, {
      name,
      history,
    });

    this.brands.push(brand);
  }
}

export { BrandsRepositoryInMemory };
