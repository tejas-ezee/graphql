import { Module } from '@nestjs/common';
//import { AppController } from './app.controller';
//import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { TasksModule } from './tasks/tasks.module';
import { TodoModule } from './todo/todo.module';
import { TypeOrmModule } from '@nestjs/typeorm'
import { Todo } from './todo/entities/todo.entity';

@Module({
  imports: [
    TasksModule,
    TodoModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      debug: false,
      playground: true,
      autoSchemaFile: true,
    }),
    TypeOrmModule.forRoot({
      name:'default',
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'work_gql',
      entities: [Todo],
      synchronize: false,
      dropSchema: false
    }),
  ],
  //controllers: [AppController],
  //providers: [AppService],
})
export class AppModule {}
