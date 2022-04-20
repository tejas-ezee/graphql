import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { TodoService } from './todo.service';
import { Todo } from './entities/todo.entity';
import { CreateTodoInput } from './dto/create-todo.input';
import { UpdateTodoInput } from './dto/update-todo.input';

@Resolver(() => Todo)
export class TodoResolver {
  constructor(private readonly todoService: TodoService) {}

  @Mutation(() => Todo)
  async createNewTodo(@Args('createTodoInput') createTodoInput: CreateTodoInput) {
    return this.todoService.createNewTodo(createTodoInput);
  }

  @Mutation(() => [Todo])
  async createNewTodoWithFetchAllTodo(@Args('createTodoInput') createTodoInput: CreateTodoInput) {
    await this.createNewTodo(createTodoInput)
    return this.allTodo();
  }

  @Query(() => [Todo])
  async allTodo() {
    return this.todoService.allTodo();
  }

  @Query(() => Todo)
  async getTodoById(@Args('id', { type: () => Int }) id: number) {
    return this.todoService.getTodoById(id);
  }

  @Mutation(() => [Todo])
  async updateTodoById(@Args('updateTodoInput') updateTodoInput: UpdateTodoInput) {
    await this.todoService.updateTodoById(updateTodoInput.id, updateTodoInput);
    return this.allTodo()
  }

  @Mutation(() => [Todo])
  async removeTodoById(@Args('id', { type: () => Int }) id: number) {
    await this.todoService.removeTodoById(id);
    return this.allTodo()
  }
}
