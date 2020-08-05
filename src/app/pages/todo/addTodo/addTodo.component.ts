import { Component, EventEmitter, Output } from '@angular/core';
import { TodoService } from '../../../services';
import { Todo } from '../../../models';
import { FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'add-todo',
  templateUrl: 'addTodo.component.html',
  styleUrls: ['addTodo.component.scss']
})

export class AddTodoComponent {

  private newTodo: Todo;

  title: FormControl;

  constructor(private todoService: TodoService) { 
    this.newTodo = new Todo();
  }

  ngOnInit() {
   this.title = new FormControl();
   this.title.valueChanges
             .subscribe(value => this.newTodo.title = value);
  }

  addTodo() {
    this.newTodo.title =  this.newTodo.title.trim();
    if (!this.newTodo.title) {
      return;
    }
    const newTodo = new Todo({
        title: this.newTodo.title,
        complete: false
    });
    this.todoService.addTodo(newTodo);
  }

}
