import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { PostsTable } from '../../components/PostsTable/PostsTable';

import { useUserContext } from '../../context/UserContext/useUserContext';

export const Posts = () => {
	const { userSlug } = useParams();
	const { setSelectedUserId } = useUserContext();
	if (!userSlug) {
		throw new Error('Posts page should be rendered inside route with `userSlug` param');
	}
	const id = userSlug.split('user')[1];

	useEffect(() => {
		setSelectedUserId(Number(id));
		return () => setSelectedUserId(null);
	}, [setSelectedUserId, id]);

	return <PostsTable userId={id} />;
};
