import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity('todo')
export class Todo {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column()
  @Field()
  name: string;

  @Column()
  @Field()
  location: string;

  @Column()
  @Field()
  email: string;

  @Column()
  @Field()
  mobile: string;

  @Column()
  @Field()
  date: string;
}
