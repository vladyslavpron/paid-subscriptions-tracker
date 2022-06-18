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

@Controller('users')
export class UsersController {
  constructor(
    private usersService: UsersService,
    private subscriptionsService: SubscriptionsService,
  ) {}

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

  @UseGuards(AuthGuard)
  @Get('/:userId/subscriptions')
  getUserSubscriptions(@CurrentUser() user: User) {
    return this.subscriptionsService.getUserSubscriptions(user);
  }

  @UseGuards(AuthGuard)
  @Post('/:userId/subscriptions')
  createUserSubscription(
    @CurrentUser() user: User,
    @Body() subscriptionDto: CreateSubscriptionDto,
  ) {
    return this.subscriptionsService.createSubscription(subscriptionDto, user);
  }
}
