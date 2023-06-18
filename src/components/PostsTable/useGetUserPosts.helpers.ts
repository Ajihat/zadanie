import { USER_POSTS_QUERY_KEY } from 'src/api/constants';

export const getUserPostsQueryKey = (userId: string) => {
  return [USER_POSTS_QUERY_KEY, userId];
};
