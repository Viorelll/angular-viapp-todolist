import { Component, EventEmitter, Output } from '@angular/core';
import { TodoService } from '../../../services';
import { Todo } from "../../../models";
import { MatCheckboxChange } from '@angular/material/checkbox';

@Component({
  selector: 'todo-list',
  templateUrl: 'todoList.component.html',
  styleUrls: ['todoList.component.scss']
})
export class TodoListComponent {

constructor(private todoService: TodoService) {}
  private todosList: Todo[] = [];

  ngOnInit() {
    this.todoService.getTodos()
                    .subscribe(todos => 
                        this.todosList = todos.filter(todo => !todo.complete));
  }

  onCompleteChange(todo: Todo, change: MatCheckboxChange) {
    todo.complete = change.checked;
    this.todoService.toggleTodoComplete(todo);
  }

}