import { ICreateUserDTO } from '@modules/accounts/dtos/ICreateUserDTO';
import { UsersRepositoryInMemory } from '@modules/accounts/repositories/in-memory/UsersRepositoryInMemory';
import { AppError } from '@shared/errors/AppError';

import { CreateUserUseCase } from '../createUser/CreateUserUseCase';
import { AuthenticateUserUseCase } from './AuthenticateUserUseCase';

let authenticateUserUseCase: AuthenticateUserUseCase;
let usersRepositoryInMemory: UsersRepositoryInMemory;
let createUserUseCase: CreateUserUseCase;

describe('Authenticate User', () => {
  beforeEach(() => {
    usersRepositoryInMemory = new UsersRepositoryInMemory();
    authenticateUserUseCase = new AuthenticateUserUseCase(
      usersRepositoryInMemory,
    );
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

    const result = await authenticateUserUseCase.execute({
      email: user.email,
      password: user.password,
    });

    expect(result).toHaveProperty('token');
  });

  it('Should not be able to authenticate an nonexistent user', async () => {
    expect(async () => {
      await authenticateUserUseCase.execute({
        email: 'nonexist@test.com',
        password: '1111',
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it('Should not be able to authenticate with incorrect passoword', () => {
    expect(async () => {
      const user: ICreateUserDTO = {
        name: 'User Test',
        email: 'user@test.com',
        password: '1234',
        document: '11122233345',
        username: 'user_test',
      };

      await createUserUseCase.execute(user);

      await authenticateUserUseCase.execute({
        email: user.email,
        password: 'error',
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
