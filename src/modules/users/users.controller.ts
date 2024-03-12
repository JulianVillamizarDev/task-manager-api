import { Controller, Get, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserQuery } from './dto/user-query.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly userServices: UsersService) {}
  @Get()
  findAll() {
    return this.userServices.findAll();
  }

  @Get('/findby')
  findBy(@Query() query: UserQuery) {
    return this.userServices.findBy(query);
  }
}
