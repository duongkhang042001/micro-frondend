import { queryUserList } from '@/services/user/UserController';
import { useCallback, useState } from 'react';

export default () => {
  const [users, setUsers] = useState<any>([]);

  const fetchAllUsers = useCallback(async () => {
    console.log('fetch all user');
  }, []);

  const addUser = useCallback(async () => {
    setUsers(['abc', ...users]);

    const response = await queryUserList({});

    console.log(response);

    console.log('add user');
  }, [users]);

  const updateUser = useCallback(
    async (id: number) => {
      console.log('update user', id);
    },
    [users],
  );

  const removeUser = useCallback(
    async (id: number) => {
      console.log('remove user', id);
    },
    [users],
  );

  return {
    users,
    fetchAllUsers,
    addUser,
    updateUser,
    removeUser,
  };
};
