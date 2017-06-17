import { Todo } from './todo';
import { Injectable } from '@angular/core';

@Injectable()
export class TodoService {

  // 增加 todo 时模拟自增id
  id: number = 0;

  // 用于在内存里保存 todo 信息
  todos: Todo[] = [];

  constructor() { }

  add(todo: Todo): Todo {
    if (!todo.id) {
      todo.id = ++this.id;
    }
    this.todos.push(todo);
    return todo;
  }
  deleteById(id: number): void {
    this.todos = this.todos
      .filter(todo => todo.id !== id);
  }
  update(todo: Todo): Todo {
    let t = this.findById(todo.id);
    if (!t) {
      return null;
    }
    Object.assign(t, todo);
    return t;
  }
  findById(id: number): Todo {
    return this.todos
      .filter(todo => todo.id === id)
      .pop();
  }
  findAll(): Todo[] {
    return this.todos;
  }

  toggleTodoComplete(todo: Todo){
    todo.complete = !todo.complete;
    let u = this.update(todo);
    return u;
  }

}
