import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/user.entity';
import { Repository } from 'typeorm';
import { Subscription } from './subscription.entity';

@Injectable()
export class SubscriptionsService {
  constructor(
    @InjectRepository(Subscription)
    private subscriptionsRepository: Repository<Subscription>,
  ) {}

  async getUserSubscriptions(user: User) {
    console.log(user);

    const subscriptions = await this.subscriptionsRepository.find({
      where: { userId: user.id },
    });
    return subscriptions;
  }

  async createSubscription(subscription: Subscription) {
    const sub = this.subscriptionsRepository.create(subscription);
    await this.subscriptionsRepository.save(sub);
    return sub;
  }
}
