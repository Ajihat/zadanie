import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';

import { Spinner, ErrorSign } from '../index';
import { useGetUserPosts } from './useGetUserPosts';
import { generatePostsTableRows } from './PostsTable.helpers';

import { PostsTableProps } from './PostsTable.types';

export const PostsTable = ({ userId }: PostsTableProps) => {
	const { data, isError, isLoading } = useGetUserPosts(userId);
	console.log(data);
	if (isLoading) return <Spinner />;
	if (isError) return <ErrorSign />;
	return (
		<TableContainer>
			<Table>
				<TableHead>
					<TableRow>
						<TableCell>ID</TableCell>
						<TableCell align='right'>Title</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{generatePostsTableRows(data).map((row) => (
						<TableRow key={row.id}>
							<TableCell>{row.id}</TableCell>
							<TableCell align='right'>{row.title}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};
