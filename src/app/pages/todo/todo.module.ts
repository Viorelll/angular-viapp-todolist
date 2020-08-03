import { AppModule } from '../../app.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from "@angular/flex-layout";


import { TodoComponent } from "./todo.component";
import { TodoListComponent } from "./todoList/todoList.component";
import { AddTodoComponent } from "./addTodo/addTodo.component";
import { MaterialModule } from '../../material-module';
import { TodoItemComponent } from './todoList/todoItem/todoItem.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    FlexLayoutModule,
    RouterModule.forChild([{
      path: '',
      component: TodoComponent
    }])
  ],
  declarations: [TodoComponent, TodoListComponent, TodoItemComponent, AddTodoComponent]
})
export class TodoModule {}