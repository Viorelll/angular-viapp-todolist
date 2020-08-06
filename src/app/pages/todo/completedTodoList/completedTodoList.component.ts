import { Component, Input } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';

import { TodoService } from '../../../services'; 
import { Todo } from '../../../models';

@Component({
  selector: 'completed-todo-list',
  templateUrl: 'completedTodoList.component.html',
  styleUrls: ['completedTodoList.component.scss']
})

export class CompletedTodoList {
  private completedTodosList: Todo[] = [];

  constructor(private todoService: TodoService) {}
  
  ngOnInit(): void {
    this.todoService.getTodos()
        .subscribe(todos => this.completedTodosList = todos
        .filter(todo => todo.complete));
  }

  onCompleteChange(todo: Todo, change: MatCheckboxChange) {
    todo.complete = change.checked;
    this.todoService.toggleTodoComplete(todo);
  }

  onDeleteCompletedTodo(todo: Todo) {
    this.todoService.deleteTodoById(todo.id);
  }

   getCompletedTodos(): number {
    if (this.completedTodosList.length > 0) {
      return this.completedTodosList.filter(todo => todo.complete).length;
    }
    return 0;
  }
}