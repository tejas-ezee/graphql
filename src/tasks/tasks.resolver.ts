import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { TasksService } from './tasks.service';
import { AddTaskInput } from './task.dto';
import { UpdateTaskInput } from './task.dto';
import { Task } from './task.model';

@Resolver('Tasks')
export class TasksResolver {
  constructor(private readonly taskService: TasksService) {}

  @Query(() => [Task])
  async getTasks() {
    return this.taskService.getTasks();
  }

  @Query(() => Task)
  async getTask(@Args('id') id: string) {
    return this.taskService.getTask(id);
  }

  @Mutation(() => [Task])
  async addTask(@Args('input') input: AddTaskInput) {
    return this.taskService.addTask(input);
  }

  @Mutation(() => [Task])
  async updateTask(@Args('input') input: UpdateTaskInput) {
    return this.taskService.updateTask(input);
  }

  @Mutation(() => [Task])
  async deleteTask(@Args('id') id: string) {
    return this.taskService.deleteTask(id);
  }
}
