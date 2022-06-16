import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { UsersModule } from 'src/users/users.module';
import { UsersService } from 'src/users/users.service';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [
    UsersService,
    JwtModule.register({
      secret: process.env.SECRET_KEY,
      signOptions: { expiresIn: '24h' },
    }),
  ],
})
export class AuthModule {}
