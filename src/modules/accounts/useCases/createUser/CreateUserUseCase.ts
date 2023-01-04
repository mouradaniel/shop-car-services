import { inject, injectable } from 'tsyringe';

import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';
import { IUsersRepository } from '../../repositories/IUsersRepository';

@injectable()
class CreateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private userRepository: IUsersRepository,
  ) {}

  async execute({
    name,
    username,
    password,
    email,
    document,
  }: ICreateUserDTO): Promise<void> {
    await this.userRepository.create({
      name,
      username,
      password,
      email,
      document,
    });
  }
}

export { CreateUserUseCase };
