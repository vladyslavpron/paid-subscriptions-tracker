import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { Request } from 'express';
import { AuthGuard } from 'src/auth/auth.guard';
import { CreateSubscriptionDto } from 'src/subscriptions/dto/create-subscription.dto';
import { Subscription } from 'src/subscriptions/subscription.entity';
import { SubscriptionsService } from 'src/subscriptions/subscriptions.service';
import { CreateUserDto } from './dto/create-user.dto';
import { CurrentUser } from './user.decorator';
import { User } from './user.entity';
import { UsersService } from './users.service';

@Controller('api/users')
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
