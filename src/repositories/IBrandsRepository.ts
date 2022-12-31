import { Brand } from '../model/Brand';

interface ICreateBrandDTO {
  name: string;
  history: string;
}

interface IBrandsRepository {
  findByName(name: string): Brand;
  list(): Brand[];
  create({ name, history }: ICreateBrandDTO): void;
}

export { ICreateBrandDTO, IBrandsRepository };
