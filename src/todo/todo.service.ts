import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateResult, DeleteResult, Repository } from 'typeorm'
import { CreateTodoInput } from './dto/create-todo.input';
import { UpdateTodoInput } from './dto/update-todo.input';
import { Todo } from './entities/todo.entity'

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo)
    private readonly todoRepository: Repository<Todo>
  ){}

  createNewTodo(createTodoInput: CreateTodoInput): Promise<Todo> {
    const todo = new Todo();
    todo.name = createTodoInput.name
    todo.location = createTodoInput.location
    todo.email = createTodoInput.email
    todo.mobile = createTodoInput.mobile
    const insert = this.todoRepository.save(todo)
    return insert;
  }

  allTodo(): Promise<Todo[]> {
    return this.todoRepository.find();
  }

  getTodoById(id: number): Promise<Todo> {
    return this.todoRepository.findOne(id)
  }

  updateTodoById(id: number, updateTodoInput: UpdateTodoInput) : Promise<UpdateResult> {
    const todo = new Todo();
    todo.name = updateTodoInput.name
    todo.location = updateTodoInput.location
    todo.email = updateTodoInput.email
    todo.mobile = updateTodoInput.mobile
    const update = this.todoRepository.update(id, todo)
    return update;
  }

 async removeTodoById(id: number): Promise<DeleteResult> {
     return this.todoRepository.delete(id);;
  }
}
