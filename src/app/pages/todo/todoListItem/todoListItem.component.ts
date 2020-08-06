import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../../../models';
import { MatCheckboxChange } from '@angular/material/checkbox';

@Component({
  selector: 'todo-list-item',
  templateUrl: 'todoListItem.component.html',
  styleUrls: ['todoListItem.component.scss']
})

export class TodoListItemComponent {

  @Input() toDo: Todo;

  @Output() completeChange = new EventEmitter<MatCheckboxChange>();

  @Output() deleteChange = new EventEmitter<number>();
}