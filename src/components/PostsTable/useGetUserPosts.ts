import { useQuery } from '@tanstack/react-query';

import { axios } from '../../api/axios';
import { USER_POSTS_QUERY_KEY } from '../../api/constants';
import { Post } from './useGetUserPosts.types';

export const useGetUserPosts = (userId: string) => {
	const GET_USER_POSTS_URL = `/posts`;
	const result = useQuery(
		[USER_POSTS_QUERY_KEY, userId],
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
		}
	);
	return result;
};
