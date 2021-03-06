import { AppModule } from '../../app.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from "@angular/flex-layout";

import { MaterialModule } from "../../material-module";

import { TodoComponent } from "./todo.component";
import { TodoListComponent } from "./todoList/todoList.component";
import { AddTodoComponent } from "./addTodo/addTodo.component";
import { TodoListItemComponent } from "./todoListItem/todoListItem.component";
import { CompletedTodoList } from './completedTodoList/completedTodoList.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    RouterModule.forChild([{
      path: '',
      component: TodoComponent
    }])
  ],
  declarations: [TodoComponent, TodoListComponent, TodoListItemComponent, AddTodoComponent, CompletedTodoList]
})
export class TodoModule {}