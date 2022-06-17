import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';
import { User } from './users/user.entity';
import { UsersModule } from './users/users.module';
import { SubscriptionsModule } from './subscriptions/subscriptions.module';

import * as dotenv from 'dotenv';
import { Subscription } from './subscriptions/subscription.entity';

dotenv.config({ path: './config.env' });

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      entities: [User, Subscription],
      autoLoadEntities: true,
      synchronize: true,
      ssl: true,

      extra:
        process.env.NODE_ENV === 'production'
          ? {}
          : {
              ssl: {
                rejectUnauthorized: false,
              },
            },
    }),
    UsersModule,
    AuthModule,
    SubscriptionsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
