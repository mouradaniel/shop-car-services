import { hash } from 'bcrypt';
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
    const userAlreadyExists = await this.userRepository.findByEmail(email);

    if (userAlreadyExists) {
      throw new Error('User Already Exists!');
    }

    const encryptedPassword = await hash(password, 7);

    await this.userRepository.create({
      name,
      username,
      password: encryptedPassword,
      email,
      document,
    });
  }
}

export { CreateUserUseCase };
