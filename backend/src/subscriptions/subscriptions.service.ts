import {
  BadRequestException,
  HttpCode,
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/user.entity';
import { Repository } from 'typeorm';
import { CreateSubscriptionDto } from './dto/create-subscription.dto';
import { UpdateSubscriptionDto } from './dto/update-subscription.dto';
import { Subscription } from './subscription.entity';

@Injectable()
export class SubscriptionsService {
  constructor(
    @InjectRepository(Subscription)
    private subscriptionsRepository: Repository<Subscription>,
  ) {}

  async getUserSubscriptions(user: User) {
    const subscriptions = await this.subscriptionsRepository.findBy({
      userId: user.id,
    });
    return subscriptions;
  }

  async createSubscription(subscriptionDto: CreateSubscriptionDto, user: User) {
    try {
      const sub = this.subscriptionsRepository.create(subscriptionDto);
      sub.userId = user.id;
      await this.subscriptionsRepository.save(sub);
      return sub;
    } catch (err) {
      if (err.code === '22007') {
        throw new HttpException('Invalid date', HttpStatus.BAD_REQUEST);
      } else {
        throw new BadRequestException();
      }
    }
  }

  async updateSubscription(
    subscriptionId: number,
    data: UpdateSubscriptionDto,
  ) {
    try {
      const subscription = await this.subscriptionsRepository.findOneBy({
        id: subscriptionId,
      });
      if (!subscription) throw new NotFoundException('subscription not found');

      return this.subscriptionsRepository.save({ ...subscription, ...data });
    } catch (err) {
      console.log(err);
      throw new HttpException('something went wrong', HttpStatus.BAD_REQUEST);
    }
  }
}
