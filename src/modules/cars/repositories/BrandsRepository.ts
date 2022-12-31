import { Brand } from '../model/Brand';
import { IBrandsRepository, ICreateBrandDTO } from './IBrandsRepository';

class BrandsRepository implements IBrandsRepository {
  private brands: Brand[];

  constructor() {
    this.brands = [];
  }

  create({ name, history }: ICreateBrandDTO): void {
    const brand = new Brand();

    Object.assign(brand, {
      name,
      history,
      created_at: new Date(),
    });

    this.brands.push(brand);
  }

  list(): Brand[] {
    return this.brands;
  }

  findByName(name: string): Brand {
    const brand = this.brands.find(brand => brand.name === name);
    return brand;
  }
}

export { BrandsRepository };
