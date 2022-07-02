import { Type } from 'class-transformer';
import {
  IsDate,
  IsDateString,
  IsISO8601,
  IsNumber,
  IsPositive,
  IsString,
} from 'class-validator';

export class CreateSubscriptionDto {
  @IsString({ message: 'Name must be a string' })
  readonly title: string;

  @IsNumber({}, { message: 'Price must be a number' })
  @IsPositive()
  readonly price: number;

  @Type(() => Date)
  @IsDate({ message: 'startDate must be a date' })
  // @IsISO8601()
  // @IsDateString({ message: 'startDate must be a date' })
  readonly startDate: Date;
}
