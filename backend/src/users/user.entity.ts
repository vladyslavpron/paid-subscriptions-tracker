import { Subscription } from 'src/subscriptions/subscription.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({})
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ type: 'char', length: 3, default: 'USD' })
  currencyCode: string;

  // @OneToMany(type=>Subscription, subscription=>)
}
