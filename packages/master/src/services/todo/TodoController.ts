import { request } from '@umijs/max';

export async function queryAllTodos() {
  return await request<any>('/api/todos', {
    method: 'GET',
  });
}
