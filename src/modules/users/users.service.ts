import { Injectable, Inject } from '@nestjs/common';
import { User } from 'src/entities/user.entity';
import { CreateUserDTO } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USERS_REPOSITORY')
    private usersRepository: typeof User,
  ) {}

  //find all users
  async findAll(): Promise<User[]> {
    return await this.usersRepository.findAll({
      attributes: ['name', 'surname', 'email', 'isVerified'],
    });
  }

  /*
   * conditions = { email: 'example@email.com' }
   * conditions = { id_user: 12 }
   */
  async findBy(conditions: any): Promise<User> {
    return await this.usersRepository.findOne({
      where: conditions,
      attributes: ['name', 'surname', 'email', 'isVerified'],
    });
  }

  //create user
  /* 
      CreateUserDTO {

      }  
  */
  async create(newUser: CreateUserDTO): Promise<User> {
    return await this.usersRepository.create({
      name: newUser.name,
      surname: newUser.surname,
      email: newUser.email,
      password: newUser.password,
    });
  }

  async update(userInfo: any): Promise<User> {
    return userInfo;
  }
}
