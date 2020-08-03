import { AppModule } from '../../app.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { TodoComponent } from "./todo.component";
import { TodoListComponent } from "./todoList/todoList.component";
import { AddTodoComponent } from "./addTodo/addTodo.component";
import { MaterialModule } from '../../material-module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    RouterModule.forChild([{
      path: '',
      component: TodoComponent
    }])
  ],
  declarations: [TodoComponent, TodoListComponent, AddTodoComponent]
})
export class TodoModule {}