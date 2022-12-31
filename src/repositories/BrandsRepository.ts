import { Brand } from '../model/Brand';

interface ICreateBrandDTO {
  name: string;
  history: string;
}

class BrandsRepository {
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
}

export { BrandsRepository };
