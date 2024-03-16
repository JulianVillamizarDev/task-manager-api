import { Injectable, Inject } from '@nestjs/common';
import { User } from 'src/entities/user.entity';
import { CreateUserDTO } from './dto/create-user.dto';
import { UserQuery } from './dto/user-query.dto';
import { UpdateUserDTO } from './dto/update-user.dto';
import { UserAttributes } from 'src/types';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USERS_REPOSITORY')
    private usersRepository: typeof User,
  ) {}

  /**
   * Finds all users from the database.
   *
   * @returns Promise resolving to array of User objects containing only name, surname, email and isVerified fields
   */
  async findAll(): Promise<User[]> {
    return await this.usersRepository.findAll({
      attributes: [
        UserAttributes.NAME,
        UserAttributes.SURNAME,
        UserAttributes.EMAIL,
        UserAttributes.IS_VERIFIED,
      ],
    });
  }

  /**
   * Finds a single user matching the given conditions.
   *
   * @param conditions - The conditions to find the user by. Can be an object with the user ID, email, etc.
   * @returns A promise resolving to the found user, or undefined if no user matches.
   */
  async findBy(conditions: UserQuery): Promise<User> {
    return await this.usersRepository.findOne({
      where: conditions as any,
      attributes: [
        UserAttributes.NAME,
        UserAttributes.SURNAME,
        UserAttributes.EMAIL,
        UserAttributes.IS_VERIFIED,
      ],
    });
  }

  /**
   * Creates a new user record in the database.
   *
   * @param newUser - The user data to create the new record with.
   * @returns The created user record.
   */
  async create(newUser: CreateUserDTO): Promise<User> {
    return await this.usersRepository.create({
      name: newUser.name,
      surname: newUser.surname,
      email: newUser.email,
      password: newUser.password,
    });
  }

  async update(userInfo: UpdateUserDTO, id: string): Promise<any> {
    return await this.usersRepository.update(userInfo, {
      where: {
        id_user: id,
      },
    });
  }

  async delete(id: string): Promise<any> {
    return await this.usersRepository.destroy({
      where: {
        id_user: id,
      },
    });
  }
}
