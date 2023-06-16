import { useQuery } from '@tanstack/react-query';

import { axios } from '../../api/axios';
import { getPostQueryKey } from './useGetPost.helpers';
import { Post } from './useGetPost.types';

export const useGetPost = (postId: string) => {
	const GET_POST = `/posts/${postId}`;
	const result = useQuery(
		getPostQueryKey(postId),
		async () => {
			const { data } = await axios.get<Post>(GET_POST);
			return data;
		},
		{
			retry: false,
		}
	);
	return result;
};
