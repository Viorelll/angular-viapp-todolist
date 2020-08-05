import { Component } from '@angular/core';
import { TodoService } from '../../services';

@Component({
  selector: 'to-do',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  providers: [TodoService]
})

export class TodoComponent {

}