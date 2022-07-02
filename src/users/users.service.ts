import {
  BadRequestException,
  HttpCode,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async createUser(dto: CreateUserDto) {
    try {
      const user = this.usersRepository.create(dto);

      const hashedPassword = await bcrypt.hash(dto.password, 5);
      user.password = hashedPassword;

      await this.usersRepository.save(user);
      return user;
    } catch (err) {
      if (err.code === '23505') {
        throw new HttpException(err.detail, HttpStatus.BAD_REQUEST);
      }
      throw new BadRequestException();
    }
  }

  async getAllUsers() {
    const users = await this.usersRepository.find();
    return users;
  }

  async getUserById(userId: number) {
    const user = await this.usersRepository.findOne({
      where: {
        id: userId,
      },
    });
    return user;
  }

  async getUserByEmail(email: string) {
    const user = await this.usersRepository.findOne({
      where: {
        email,
      },
    });
    return user;
  }
}
