import { POST_QUERY_KEY } from '../../api/constants';

export const getPostQueryKey = (postId: string) => {
	return [POST_QUERY_KEY, postId];
};
