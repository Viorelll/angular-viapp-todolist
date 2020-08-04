import { Component, EventEmitter, Output } from '@angular/core';
import { TodoService } from '../../../services';
import { Todo } from '../../../models';
import { FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'add-todo',
  templateUrl: 'addTodo.component.html',
  styleUrls: ['addTodo.component.scss']
})

export class AddTodoComponent {

  private newTodo: Partial<Todo>;
  private unsubscribe = new Subject<void>();

  title: FormControl;
  @Output() toDoChange = new EventEmitter<Partial<Todo>>();

  constructor(private todoService: TodoService) { }

  ngOnInit() {
   this.title = new FormControl();
    this.title.valueChanges
      .pipe(debounceTime(200), takeUntil(this.unsubscribe))
      .subscribe(value => this.toDoChange.emit({ title: value }));
  }

  addTodo(event: any) {
    console.log(this.newTodo);

   this.todoService.addTodo(new Todo({
      id: Math.floor(Math.random() * 100),
      title: this.newTodo.title,
      complete: false
   }));
   
 }

  onAddToDoChange(toDo: Partial<Todo>) {
    this.newTodo = toDo;
  }
  
}
