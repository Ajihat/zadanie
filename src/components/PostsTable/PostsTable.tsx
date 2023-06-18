import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { Spinner, ErrorSign } from 'src/components';

import { useGetUserPosts } from './useGetUserPosts';
import { generatePostsTableRows } from './PostsTable.helpers';
import { PostsTableProps } from './PostsTable.types';
import * as styles from './PostsTable.styles';

export const PostsTable = ({ userId }: PostsTableProps) => {
  const navigate = useNavigate();
  const { data, isError, isLoading } = useGetUserPosts(userId);
  if (isLoading) return <Spinner />;
  if (isError) return <ErrorSign />;
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">Title</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {generatePostsTableRows(data).map(row => (
            <TableRow
              onClick={() => navigate(`/user${userId}/post${row.id}`)}
              sx={styles.row}
              key={row.id}
            >
              <TableCell>{row.id}</TableCell>
              <TableCell align="right">{row.title}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
