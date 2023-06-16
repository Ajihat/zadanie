import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { Spinner, ErrorSign } from '../index';

import { useGetPost } from './useGetPost';

import { DetailsProps } from './Details.types';

export const Details = ({ postId }: DetailsProps) => {
	const navigate = useNavigate();
	const { data: post, isLoading, isError } = useGetPost(postId);

	if (isLoading) return <Spinner />;
	if (isError) return <ErrorSign />;

	return (
		<Box sx={{ mt: 4 }}>
			<Box sx={{ mb: 2 }}>
				<Typography variant='h6' component='p'>
					Post title:
				</Typography>
				<Typography>{post.title}</Typography>
			</Box>
			<Box sx={{ mb: 2 }}>
				<Typography variant='h6' component='p'>
					Post body:
				</Typography>
				<Typography>{post.body}</Typography>
			</Box>
			<Button onClick={() => navigate(`/user${post.userId}`)} variant='outlined'>
				Go back to posts
			</Button>
		</Box>
	);
};
