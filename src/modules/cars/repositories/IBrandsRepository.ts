import { Brand } from '../entities/Brand';

interface ICreateBrandDTO {
  name: string;
  history: string;
}

interface IBrandsRepository {
  findByName(name: string): Promise<Brand>;
  list(): Promise<Brand[]>;
  create({ name, history }: ICreateBrandDTO): Promise<void>;
}

export { ICreateBrandDTO, IBrandsRepository };
