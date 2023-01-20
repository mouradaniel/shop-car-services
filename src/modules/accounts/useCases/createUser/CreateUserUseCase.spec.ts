import { ICreateUserDTO } from '@modules/accounts/dtos/ICreateUserDTO';
import { UsersRepositoryInMemory } from '@modules/accounts/repositories/in-memory/UsersRepositoryInMemory';
import { AppError } from '@shared/errors/AppError';

import { CreateUserUseCase } from './CreateUserUseCase';

let usersRepositoryInMemory: UsersRepositoryInMemory;
let createUserUseCase: CreateUserUseCase;

describe('Create User', () => {
  beforeEach(() => {
    usersRepositoryInMemory = new UsersRepositoryInMemory();
    createUserUseCase = new CreateUserUseCase(usersRepositoryInMemory);
  });

  it('Shold be able create a new user', async () => {
    const user: ICreateUserDTO = {
      name: 'User Test',
      email: 'user@test.com',
      password: '1234',
      document: '11122233345',
      username: 'user_test',
    };

    await createUserUseCase.execute(user);

    const createdUser = await usersRepositoryInMemory.findByEmail(user.email);

    expect(createdUser).toHaveProperty('id');
  });

  it('Should not be able to create a new user with same email', async () => {
    expect(async () => {
      const user: ICreateUserDTO = {
        name: 'User Test',
        email: 'user@test.com',
        password: '1234',
        document: '11122233345',
        username: 'user_test',
      };

      await createUserUseCase.execute(user);
      await createUserUseCase.execute(user);
    }).rejects.toBeInstanceOf(AppError);
  });
});
