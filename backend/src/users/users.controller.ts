import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  create(@Body() userDto: CreateUserDto) {
    return this.usersService.createUser(userDto);
  }

  @UseGuards(AuthGuard)
  @Get()
  getAll() {
    return this.usersService.getAllUsers();
  }

  @Get('/:userId')
  getUserById(@Param('userId') userId: number) {
    return this.usersService.getUserById(userId);
  }
}
