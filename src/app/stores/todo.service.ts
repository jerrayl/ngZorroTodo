import { computed, Injectable, signal, WritableSignal } from '@angular/core';
import { Page, Todo } from '../models/todo.model';
import { createTodo, getTodos, login } from './todo.api';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  searchValue = signal('');
  todos: WritableSignal<Page<Todo> | null> = signal(null);

  filteredTodos = computed(() =>
    this.todos()?.items.filter(x =>
      x.title.toLowerCase().includes(this.searchValue()) ||
      x.content.toLowerCase().includes(this.searchValue())
    ) ?? []
  );

  constructor() {
    login().then(() => this.loadTodos());
  }

  loadTodos = async () => {
    this.todos.set(null);
    const todos = await getTodos(this.searchValue());
    this.todos.set(todos);
  }

  createTodo = async (title: string, content: string) => {
    await createTodo(title, content);
    await this.loadTodos();
  }
}
