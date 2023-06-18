import { useQuery } from '@tanstack/react-query';

import { axios } from 'src/api/axios';
import { getUserPostsQueryKey } from './useGetUserPosts.helpers';
import { Post } from './useGetUserPosts.types';

export const useGetUserPosts = (userId: string) => {
  const GET_USER_POSTS_URL = `/posts`;
  const result = useQuery(
    getUserPostsQueryKey(userId),
    async () => {
      const { data } = await axios.get<Post[]>(GET_USER_POSTS_URL, {
        params: {
          userId,
        },
      });
      return data;
    },
    {
      retry: false,
    },
  );
  return result;
};
