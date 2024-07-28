import { Injectable } from '@angular/core';
import { Page, Todo } from '../models/todo.model';
import { createTodo, getTodos, login } from './todo.api';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  searchValue = '';
  todos: Page<Todo> | null = null;

  constructor(){
    login().then(() => this.loadTodos());
  }

  loadTodos = async () => {
    const todos = await getTodos(this.searchValue);
    this.todos = todos;
  }

  createTodo = async (title: string, content: string) => {
    await createTodo(title, content);
    await this.loadTodos();
  }
}
