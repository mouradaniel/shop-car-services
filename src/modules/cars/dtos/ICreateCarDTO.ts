import { Specification } from '../infra/typeorm/entities/Specification';

interface ICreateCarDTO {
  id?: string;
  name: string;
  description: string;
  listPrice: number;
  salePrice: number;
  brand_id?: string;
  specifications?: Specification[];
}

export { ICreateCarDTO };
