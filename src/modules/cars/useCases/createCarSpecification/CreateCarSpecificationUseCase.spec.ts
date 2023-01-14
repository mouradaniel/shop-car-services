import { CarsRepositoryInMemory } from '@modules/cars/repositories/in-memory/CarsRepositoryInMemory';
import { SpecificationsInMemory } from '@modules/cars/repositories/in-memory/SpecificationsInMemory';
import { AppError } from '@shared/errors/AppError';

import { CreateCarSpecificationUseCase } from './CreateCarSpecificationUseCase';

let createCarSpecificationUseCase: CreateCarSpecificationUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;
let specificationsRepositoryInMemory: SpecificationsInMemory;

describe('Create Car Specification', () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    specificationsRepositoryInMemory = new SpecificationsInMemory();
    createCarSpecificationUseCase = new CreateCarSpecificationUseCase(
      carsRepositoryInMemory,
      specificationsRepositoryInMemory,
    );
  });

  it('Should not be able to add a new specification to a non-existent car', async () => {
    expect(async () => {
      const car_id = 'not_exists';
      const specifications_id = ['1234'];

      await createCarSpecificationUseCase.execute({
        car_id,
        specifications_id,
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it('Should be able to add a new specification to the car', async () => {
    const car = await carsRepositoryInMemory.create({
      name: 'Car Test',
      description: 'Car Test Description',
      listPrice: 30000,
      salePrice: 27000,
      brand_id: 'Brand-Car-Test-Id',
    });

    const specification = await specificationsRepositoryInMemory.create({
      name: 'Specification Test',
      description: 'Specification Test Description',
    });

    const specifications_id = [specification.id];

    const speficationsCars = await createCarSpecificationUseCase.execute({
      car_id: car.id,
      specifications_id,
    });

    expect(speficationsCars).toHaveProperty('specifications');
    expect(speficationsCars.specifications.length).toBe(1);
  });
});
