import { Component, inject } from '@angular/core';
import { NzListModule } from 'ng-zorro-antd/list';
import { TodoService } from '../../stores/todo.service';

@Component({
  selector: 'list-component',
  templateUrl: './list.component.html',
  imports: [NzListModule],
  standalone: true
})
export class ListComponent {
  todoService = inject(TodoService);
}