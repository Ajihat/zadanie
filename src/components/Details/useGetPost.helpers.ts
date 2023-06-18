import { POST_QUERY_KEY } from 'src/api/constants';

export const getPostQueryKey = (postId: string) => {
  return [POST_QUERY_KEY, postId];
};
