import {
  Body,
  Controller,
  Get,
  HttpCode,
  Post,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { Response } from 'express';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { LoginUserDto } from 'src/users/dto/login-user.dto';
import { CurrentUser } from 'src/users/user.decorator';
import { User } from 'src/users/user.entity';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';

@Controller('api/auth/')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  async register(
    @Body() userDto: CreateUserDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    const registrationData = await this.authService.register(userDto);
    res.cookie('accessToken', registrationData.token, {
      maxAge: 14 * 24 * 60 * 60 * 1000,
      httpOnly: true,
      secure: process.env.NODE_END === 'production',
    });
    return registrationData;
  }

  @Post('login')
  @HttpCode(200)
  async login(
    @Body() userDto: LoginUserDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    const loginData = await this.authService.login(userDto);

    res.cookie('accessToken', loginData.token, {
      maxAge: 14 * 24 * 60 * 60 * 1000,
      httpOnly: true,
      secure: process.env.NODE_END === 'production',
    });

    return loginData;
  }

  @Get('verify')
  @UseGuards(AuthGuard)
  async verify(
    @CurrentUser() user: User,
    @Res({ passthrough: true }) res: Response,
  ) {
    const loginData = await this.authService.loginVerifiedUser(user.id);

    res.cookie('accessToken', loginData.token, {
      maxAge: 14 * 24 * 60 * 60 * 1000,
      httpOnly: true,
      secure: process.env.NODE_END === 'production',
    });
    return loginData;
  }

  @Post('logout')
  @HttpCode(200)
  logout(@Res({ passthrough: true }) res: Response) {
    res.clearCookie('accessToken', {
      httpOnly: true,
      secure: process.env.NODE_END === 'production',
    });
    return;
  }
}
