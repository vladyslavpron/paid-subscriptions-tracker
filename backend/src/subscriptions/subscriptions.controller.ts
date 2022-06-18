import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { CurrentUser } from 'src/users/user.decorator';
import { User } from 'src/users/user.entity';
import { CreateSubscriptionDto } from './dto/create-subscription.dto';
import { SubscriptionsService } from './subscriptions.service';

@Controller('api/subscriptions')
export class SubscriptionsController {
  constructor(private subscriptionsService: SubscriptionsService) {}

  @UseGuards(AuthGuard)
  @Get()
  getUserSubscriptions(@CurrentUser() user: User) {
    return this.subscriptionsService.getUserSubscriptions(user);
  }

  @UseGuards(AuthGuard)
  @Post()
  createUserSubscription(
    @CurrentUser() user: User,
    @Body() subscriptionDto: CreateSubscriptionDto,
  ) {
    return this.subscriptionsService.createSubscription(subscriptionDto, user);
  }
}
