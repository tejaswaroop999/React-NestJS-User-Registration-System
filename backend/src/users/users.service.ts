import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './createuser.dto';

@Injectable()
export class UsersService {
  private users = [];

  create(createUserDto: CreateUserDto) {
    this.users.push(createUserDto);
    return 'User successfully registered!';
  }

  findAll() {
    return this.users;
  }
}
