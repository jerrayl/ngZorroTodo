import { Component, computed, inject, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { TodoService } from '../../stores/todo.service';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'search-component',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './search.component.html',
  imports: [FormsModule, NzInputModule, NzIconModule],
  standalone: true
})
export class SearchComponent {
  todoService = inject(TodoService);

  options = computed(() => this.todoService.todos()?.items.map(x => x.title) ?? []);

  onInput(event: Event): void {
    this.todoService.searchValue.set((event.target as HTMLInputElement).value);
  }
}
