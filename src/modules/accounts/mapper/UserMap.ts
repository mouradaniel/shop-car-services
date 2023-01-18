import { IUserResponseDTO } from '../dtos/IUserResponseDTO';
import { User } from '../infra/typeorm/entities/User';

class UserMap {
  static toDTO({ name, username, email, document }: User): IUserResponseDTO {
    return { name, username, email, document };
  }
}

export { UserMap };
