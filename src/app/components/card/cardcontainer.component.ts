import { Component, inject } from '@angular/core';
import { TodoService } from '../../stores/todo.service';
import { NzEmptyComponent } from 'ng-zorro-antd/empty';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { CardComponent } from './card.component';
import { NzCardComponent } from 'ng-zorro-antd/card';
import { NgFor } from '@angular/common';

@Component({
  selector: 'cardcontainer-component',
  templateUrl: './cardcontainer.component.html',
  imports: [NzEmptyComponent, NzFlexModule, NzCardComponent, CardComponent, NgFor],
  standalone: true
})
export class CardContainerComponent {
  todoService = inject(TodoService);
}