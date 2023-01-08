import { BrandsRepositoryInMemory } from '../../repositories/in-memory/BrandsRepositoryInMemomry';
import { CreateBrandUseCase } from './CreateBrandUseCase';

let createBrandUseCase: CreateBrandUseCase;
let brandsRepositoryInMemory: BrandsRepositoryInMemory;

describe('Create Brand', () => {
  beforeEach(() => {
    brandsRepositoryInMemory = new BrandsRepositoryInMemory();
    createBrandUseCase = new CreateBrandUseCase(brandsRepositoryInMemory);
  });

  it('Should be able to create a new brand', async () => {
    const brand = {
      name: 'Brand Test',
      history: 'Brand History Test',
    };

    await createBrandUseCase.execute({
      name: brand.name,
      history: brand.history,
    });

    const createdBrand = await brandsRepositoryInMemory.findByName(brand.name);

    expect(createdBrand).toHaveProperty('id');
  });
});
