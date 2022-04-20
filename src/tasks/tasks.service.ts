import { HttpException, Injectable } from '@nestjs/common';
import { AddTaskInput, UpdateTaskInput } from './task.dto';
import { Task } from './task.model';
import { TASKS } from './tasks.mock';

@Injectable()
export class TasksService {
  tasks = TASKS;

  getTasks() {
    return this.tasks;
  }

  getTask(id: string) {
    return this.tasks.find((task) => task.id === id);
  }

  async addTask(input: AddTaskInput): Promise<Task[]> {
    const lastTask = this.tasks.slice(-1).pop();
    const task: Task = {
      id: (parseInt(lastTask.id) + 1).toString(),
      title: input.title,
      description: input.description,
      completed: false,
    };

    this.tasks.push(task);
    return this.tasks;
  }

  async updateTask(input: UpdateTaskInput): Promise<Task[]> {
    const taskIndex = this.tasks.findIndex((item) => item.id === input.id);
    this.tasks[taskIndex].id = input.id;
    this.tasks[taskIndex].title = input.title;
    this.tasks[taskIndex].description = input.description;
    this.tasks[taskIndex].completed = input.completed;
    return this.tasks;
  }

  deleteTask(id: string): Task[] {
    const taskIndex = this.tasks.findIndex((item) => item.id === id);
    if (taskIndex === -1) {
      throw new HttpException('Task not found', 404);
    }

    this.tasks.splice(taskIndex, 1);
    return this.tasks;
  }
}
