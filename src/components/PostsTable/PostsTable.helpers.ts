import { Post } from './useGetUserPosts.types';

export const generatePostsTableRows = (posts: Post[]) => {
	const rows = posts.map((post) => {
		return {
			id: post.id,
			title: post.title,
		};
	});
	return rows;
};
