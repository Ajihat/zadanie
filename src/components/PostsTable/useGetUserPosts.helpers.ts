import { USER_POSTS_QUERY_KEY } from '../../api/constants';

export const getUserPostsQueryKey = (userId: string) => {
	return [USER_POSTS_QUERY_KEY, userId];
};
