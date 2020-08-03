import { Component,EventEmitter, Output } from '@angular/core';
import { TodoService } from '../../../services';
import { Todo } from '../../../models';

@Component({
  selector: 'add-todo',
  templateUrl: 'addTodo.component.html',
  styleUrls: ['addTodo.component.scss']
})

export class AddTodoComponent {

  private newTodo: Partial<Todo>;
  @Output() addedNewTodo = new EventEmitter<Partial<Todo>>();

  constructor(private todoService: TodoService) { }

  addTodo(event: any) {
    console.log(this.newTodo);

   this.todoService.addTodo(new Todo({
      id: Math.floor(Math.random() * 100),
      title: this.newTodo.title,
      complete: false
   }));

   this.addedNewTodo.emit(this.newTodo);
   
   this.todoService.getTodos().map(x => console.log(x));
 }

  onAddToDoChange(event: any) {
    console.log(event.target.value);
    this.newTodo = new Todo ({
      title: event.target.value
    });
  }
  
}
