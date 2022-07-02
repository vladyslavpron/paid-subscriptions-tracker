import { Type } from 'class-transformer';
import {
  IsDate,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
} from 'class-validator';

export class UpdateSubscriptionDto {
  @IsOptional()
  @IsString({ message: 'Name must be a string' })
  readonly title: string;

  @IsOptional()
  @IsNumber({}, { message: 'Price must be a number' })
  @IsPositive()
  readonly price: number;

  @IsOptional()
  @Type(() => Date)
  @IsDate({ message: 'startDate must be a date' })
  readonly startDate: Date;

  @IsOptional()
  @Type(() => Date)
  @IsDate({ message: 'endDate must be a date' })
  readonly endDate: Date;
}
