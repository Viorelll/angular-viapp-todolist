import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { TodoComponent } from "./todo.component";
import { TodoListComponent } from "./todoList/todoList.component";
import { AddTodoComponent } from "./addTodo/addTodo.component";
import { AppModule } from '../../app.module';

@NgModule({
  imports: [
    AppModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{
      path: '',
      component: TodoComponent
    }])
  ],
  declarations: [TodoComponent, TodoListComponent, AddTodoComponent]
})
export class TodoModule {}