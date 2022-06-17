import { User } from 'src/users/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'subscriptions' })
export class Subscription {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  price: number;

  @Column()
  startDate: Date;

  @Column()
  endDate: Date;

  // { eager: true }
  @ManyToOne(() => User)
  // @JoinColumn({ name: 'userId', referencedColumnName: 'id' })
  userId: number;
}
