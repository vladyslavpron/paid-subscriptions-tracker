import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';
import { User } from './users/user.entity';
import { UsersModule } from './users/users.module';

import * as dotenv from 'dotenv';

dotenv.config({ path: './config.env' });

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      entities: [User],
      autoLoadEntities: true,
      synchronize: true,
      ssl: true,

      // comment nexd property for prod
      extra: {
        ssl: {
          rejectUnauthorized: false,
        },
      },
    }),
    AuthModule,
    UsersModule,
  ],
  controllers: [AppController, AuthController],
  providers: [AppService],
})
export class AppModule {}
