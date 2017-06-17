import { TestBed, inject } from '@angular/core/testing';

import { TodoService } from './todo.service';
import { Todo } from './todo';

describe('TodoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodoService]
    });
  });

  it('should be created', inject([TodoService], (service: TodoService) => {
    expect(service).toBeTruthy();
  }));

  it('get all todo ', inject([TodoService], (service: TodoService) => {
    expect(service.findAll()).toEqual([]);
  }));

  it('add todo ', inject([TodoService], (service: TodoService) => {
    let todo1 = new Todo({ title: 'test', complete: false });
    service.add(todo1);
    expect(service.findById(1)).toEqual(todo1);
  }));

   it('toggle todo complete', inject([TodoService], (service: TodoService) => {
      let todo = new Todo({title: 'test', complete: false});
      service.add(todo);
      let updatedTodo = service.toggleTodoComplete(todo);
      expect(updatedTodo.complete).toEqual(true);
      service.toggleTodoComplete(todo);
      expect(updatedTodo.complete).toEqual(false);
    }));

});
