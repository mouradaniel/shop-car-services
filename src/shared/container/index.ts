import { container } from 'tsyringe';

import { IBrandsRepository } from '../../modules/cars/repositories/IBrandsRepository';
import { BrandsRepository } from '../../modules/cars/repositories/implementations/BrandsRepository';
import { SpecificationsRepository } from '../../modules/cars/repositories/implementations/SpecificationsRepository';
import { ISpecificationsRepository } from '../../modules/cars/repositories/ISpecificationsRepository';

container.registerSingleton<IBrandsRepository>(
  'BrandsRepository',
  BrandsRepository,
);

container.registerSingleton<ISpecificationsRepository>(
  'SpecificationsRepository',
  SpecificationsRepository,
);
