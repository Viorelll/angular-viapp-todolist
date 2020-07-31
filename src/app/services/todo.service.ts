import { Injectable } from "@angular/core";
import { Todo } from "../models";


@Injectable()
export class TodoService {
  constructor() {}

  // Placeholder for last id so we can simulate
  // automatic incrementing of ids
  lastId: number = 0;

  todos: Todo[] = [];

  addTodo(todo: Todo) {
    if (!todo.id) {
      todo.id = ++this.lastId;
    }
    this.todos.push(todo);

    return this;
  }

  deleteTodoById(id: number) {
    this.todos = this.todos.filter(todo => todo.id != id);
  }

  updateTodoById(id: number, values: Object = {}) {
    let todo = this.getTodoById(id);
    if (!todo) {
      return null;
    }

    Object.assign(todo, values);
    return todo;
  }

  getTodoById(id: number): Todo {
    return this.todos.filter(todo => todo.id == id).pop();
  }

  getTodos(): Todo[] {
    return this.todos;
  }

  toggleTodoComplete(todo: Todo) {
    let updateTodo = this.updateTodoById(todo.id, {complete: !todo.complete});
    return updateTodo;
  }

}