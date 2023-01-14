import { ICreateCarDTO } from '../dtos/ICreateCarDTO';
import { Car } from '../infra/typeorm/entities/Car';

interface ICarsRepository {
  create(data: ICreateCarDTO): Promise<Car>;
  findAll(name?: string, brand_id?: string): Promise<Car[]>;
  findById(id: string): Promise<Car>;
}

export { ICarsRepository };
