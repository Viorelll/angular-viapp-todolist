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
  fontSizePx = 16;

 constructor(private todoService: TodoService) {
   this.newTodo.title = "viorel";
   
   console.log(this.newTodo.title);
   
 }

 addTodo() {
   this.todoService.addTodo(this.newTodo);
   this.newTodo = new Todo();
 }

 toggleTodoComplete(todo) {
   this.todoService.toggleTodoComplete(todo);
 }

  removeTodo(todo) {
    this.todoService.deleteTodoById(todo.id);
  }

  get todos() {
    return this.todoService.getTodos();
  }
}