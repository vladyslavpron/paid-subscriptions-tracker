import {
  HttpCode,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async createUser(dto: CreateUserDto) {
    try {
      const user = this.usersRepository.create(dto);

      await this.usersRepository.save(user);
      return user;
    } catch (err) {
      if (err.code === '23505') {
        throw new HttpException(err.detail, HttpStatus.BAD_REQUEST);
      }
      console.log(err);
    }
  }

  async getAllUsers() {
    const users = await this.usersRepository.find();
    return users;
  }
}
