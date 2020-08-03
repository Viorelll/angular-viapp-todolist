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

  @Output() toDoChange = new EventEmitter<Todo>();

  ngOnInit() {
    this.todosList = this.todoService.getTodos();
    console.log(this.todosList);
  }

  onCompleteChange(todo: Todo, change: MatCheckboxChange) {

    console.log(todo);
    this.todoService.updateTodoById(todo.id, {
      id: todo.id, 
      title: todo.title, 
      complete: change.checked
    });
    
    this.toDoChange.emit({
      ...todo,
      complete: change.checked
    });


  }

}