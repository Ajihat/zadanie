import {
  TableContainer,
  Box,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { Spinner, ErrorSign } from 'src/components';

import { useGetUsers } from './useGetUsers';
import { generateUserTableRows } from './UsersTable.helpers';
import * as styles from './UserTable.styles';

export const UsersTable = () => {
  const { userId } = useParams();
  const navigate = useNavigate();
  const { data, isLoading, isError } = useGetUsers();

  if (isLoading) return <Spinner />;
  if (isError) return <ErrorSign />;

  return (
    <TableContainer component={Box}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {generateUserTableRows(data).map(row => (
            <TableRow
              onClick={() => navigate(`/${row.id}`)}
              key={row.name}
              sx={{
                ...styles.row,
                backgroundColor:
                  Number(userId) === row.id ? 'rgb(224,224,224)' : 'white',
              }}
            >
              <TableCell>{row.id}</TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
