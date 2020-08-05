import { Injectable } from "@angular/core";
import { Todo } from "../models";
import { Observable, of, BehaviorSubject } from 'rxjs';

@Injectable()
export class TodoService {
  constructor() {}

  // Placeholder for last id so we can simulate
  // automatic incrementing of ids
  lastId: number = 0;

  private todos: Todo[] = [];
  private tudosObservator = new BehaviorSubject<Todo[]>([]);
  private tudosObservable$ = this.tudosObservator.asObservable();

  addTodo(todo: Todo): void {
    if (!todo.id) {
      todo.id = ++this.lastId;
    }
    this.todos.push(todo);

    this.tudosObservator.next(this.todos);
  }

  getTodos(): Observable<Todo[]> {
    return this.tudosObservable$;
  }
  
  updateTodoById(id: number, values: Object = {}): void {
    let todo = this.getTodoById(id);
    if (!todo) {
      return;
    }
    Object.assign(todo, values);

    this.tudosObservator.next(this.todos);
  }

  getTodoById(id: number): any {
    return this.todos.filter(todo => todo.id == id).pop();
  }

  toggleTodoComplete(todo: Todo) {
    this.updateTodoById(todo.id, {complete: !todo.complete});
    
    this.tudosObservator.next(this.todos);
  }

  // deleteTodoById(id: number) {
  //   this.todos = this.todos.filter(todo => todo.id != id);
  // }



}