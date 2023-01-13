import { CarsRepositoryInMemory } from '@modules/cars/repositories/in-memory/CarsRepositoryInMemory';

import { ListCarsUseCase } from './ListCarsUseCase';

let listCarsUseCase: ListCarsUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe('List Cars', () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    listCarsUseCase = new ListCarsUseCase(carsRepositoryInMemory);
  });

  it('Should be able to list all cars', async () => {
    const car = await carsRepositoryInMemory.create({
      name: 'Car name',
      description: 'Car description',
      listPrice: 50000,
      salePrice: 40000,
      brand_id: 'brand_id',
    });

    const cars = await listCarsUseCase.execute({});

    expect(cars).toEqual([car]);
  });

  it('Should be able to list all cars by name', async () => {
    const car = await carsRepositoryInMemory.create({
      name: 'Car test list',
      description: 'Car description',
      listPrice: 50000,
      salePrice: 40000,
      brand_id: 'brand_id',
    });

    const cars = await listCarsUseCase.execute({
      name: car.name,
    });

    expect(cars).toEqual([car]);
  });

  it('Should be able to list all cars by brand id', async () => {
    const car = await carsRepositoryInMemory.create({
      name: 'Car test',
      description: 'Car description',
      listPrice: 50000,
      salePrice: 40000,
      brand_id: 'brand_id_test',
    });

    const cars = await listCarsUseCase.execute({
      brand_id: car.brand_id,
    });

    expect(cars).toEqual([car]);
  });
});
