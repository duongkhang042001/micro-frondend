import { queryAllTodos } from '@/services/todo/TodoController';
import { useState } from 'react';

export default () => {
  const [todos, setTodos] = useState<any>([]);

  const fetchAllTodos = async () => {
    const response = await queryAllTodos();
    setTodos(response);
  };

  return {
    todos,
    fetchAllTodos,
  };
};
