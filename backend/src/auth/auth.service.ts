import {
  HttpCode,
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { User } from 'src/users/user.entity';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';
import { LoginUserDto } from 'src/users/dto/login-user.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async register(userDto: CreateUserDto) {
    const user = await this.usersService.createUser(userDto);
    const token = this.generateToken(user);

    return { user, token };
  }

  async login(candidate: LoginUserDto) {
    const user = await this.usersService.getUserByEmail(candidate.email);

    if (!user || !(await bcrypt.compare(candidate.password, user.password))) {
      throw new UnauthorizedException('Invalid email or password');
    }
    const token = this.generateToken(user);

    return { token };
  }

  generateToken(user: User) {
    const payload = { id: user.id, email: user.email };
    return this.jwtService.sign(payload);
  }
}
