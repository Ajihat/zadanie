import { useParams } from 'react-router-dom';

import { PostsTable, Subheader } from '../../components/index';

export const Posts = () => {
	const { userSlug } = useParams();
	if (!userSlug) {
		throw new Error('Posts page should be rendered inside route with `userSlug` param');
	}
	const id = userSlug.split('user')[1];

	return (
		<>
			<Subheader text={`user${id} post(s)`} />
			<PostsTable userId={id} />
		</>
	);
};
