export class CreateSubscriptionDto {
  @IsString({ message: 'Name must be a string' })
  readonly name: string;

  @IsNumber({}, { message: 'Price must be a number' })
  //   TODO: must be positive integer
  readonly price: number;
  readonly startDate: Date;
}

import {
  IsEmail,
  IsNumber,
  IsOptional,
  IsString,
  Length,
} from 'class-validator';

export class CreateUserDto {
  @Length(3, 30, {
    message: 'Name length must be in between 3 and 30 symbols',
  })
  readonly name: string;

  @IsString({ message: 'Email must be a string' })
  @IsEmail({}, { message: 'Invalid email' })
  readonly email: string;

  @IsString({ message: 'Password must be a string' })
  @Length(4, 20, {
    message: 'Password length must be in between 4 and 20 symbols',
  })
  readonly password: string;

  @IsOptional()
  @IsString({ message: 'Currency code must be a string' })
  @Length(3, 3, { message: 'Currency code consists of 3 letters' })
  readonly currencyCode: string;
}
