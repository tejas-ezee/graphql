import { InputType, Int, Field } from '@nestjs/graphql';
import { IsInt, Length, IsEmail ,IsNotEmpty } from 'class-validator';

@InputType()
export class CreateTodoInput {
  @Field()
  @IsNotEmpty()
  @Length(30)
  name: string;

  @Field()
  @IsNotEmpty()
  @Length(30)
  location: string;

  @Field()
  @IsEmail()
  @IsNotEmpty()
  @Length(30)
  email: string;

  @Field()
  @IsNotEmpty()
  @Length(10)
  mobile: string;
}
