import { useQuery } from '@tanstack/react-query';

import { axios } from 'src/api/axios';
import { USERS_QUERY_KEY } from 'src/api/constants';
import { User } from './useGetUsers.types';

const GET_USERS_URL = '/users';

export const useGetUsers = () => {
  const result = useQuery(
    USERS_QUERY_KEY,
    async () => {
      const { data } = await axios.get<User[]>(GET_USERS_URL);
      return data;
    },
    {
      retry: false,
    },
  );
  return result;
};
