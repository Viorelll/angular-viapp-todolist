import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../../../../models';
import { MatCheckboxChange } from '@angular/material/checkbox';

@Component({
  selector: 'todo-item',
  templateUrl: 'todoItem.component.html',
  styleUrls: ['todoItem.component.scss']
})

export class TodoItemComponent {

  @Input() toDo: Todo;

  @Output() completeChange = new EventEmitter<MatCheckboxChange>();
}