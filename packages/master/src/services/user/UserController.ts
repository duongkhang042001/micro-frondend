import { request } from '@umijs/max';

export async function queryUserList(
  params: {
    keyword?: string;
    current?: number;
    pageSize?: number;
  },
  options?: { [key: string]: any },
) {
  return request<TYPE.User>('/api/todos', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
