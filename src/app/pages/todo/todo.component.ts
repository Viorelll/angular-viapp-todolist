import { Component } from '@angular/core';
import { TodoService } from '../../services';
import { Todo } from '../../models';

@Component({
  selector: 'to-do',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  providers: [TodoService]
})

export class TodoComponent {

  newTodo: Todo = new Todo();
  
 constructor(private todoService: TodoService) {
   this.newTodo.title = "viorel";
   
   console.log(this.newTodo.title);
   
 }

 onAddTodo(todo: Todo) {
   console.log('test ' + todo);
 }
  
}