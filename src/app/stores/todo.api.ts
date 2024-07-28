import PocketBase from 'pocketbase';
import { enviroment } from '../../environments/environment.development';
import { Page, Todo } from '../models/todo.model';

const pb = new PocketBase(enviroment.baseUrl);

export const login = async () => {
  if (pb.authStore.isValid) {
    return;
  }
  await pb.collection('users').authWithPassword(
    enviroment.username,
    enviroment.password,
  );
}

export const getTodos = async (searchValue?: string): Promise<Page<Todo>> => {
  return await pb.collection('todos').getList(1, 50, {
    sort: '-updated',
    filter: searchValue && `title ~ ${searchValue} || content ~ ${searchValue}`
  }) as unknown as Page<Todo>
};

export const createTodo = async (title: string, content: string) => {
  await login();

  await pb.collection('todos').create({
    "title": title,
    "type": "text",
    "user": pb.authStore.model!['id'],
    "content": content
  });
};
