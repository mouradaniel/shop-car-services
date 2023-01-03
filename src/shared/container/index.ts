import { container } from 'tsyringe';

import { IBrandsRepository } from '../../modules/cars/repositories/IBrandsRepository';
import { BrandsRepository } from '../../modules/cars/repositories/implementations/BrandsRepository';

container.registerSingleton<IBrandsRepository>(
  'BrandsRepository',
  BrandsRepository,
);
