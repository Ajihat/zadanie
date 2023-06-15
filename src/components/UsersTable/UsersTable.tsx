import { TableContainer, Box, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Spinner, ErrorSign } from '../index';

import { useGetUsers } from './useGetUsers';
import { useUserContext } from '../../context/UserContext/useUserContext';
import { generateUserTableRows } from './UsersTable.helpers';
import * as styles from './UserTable.styles';

export const UsersTable = () => {
	const { selectedUserId, setSelectedUserId } = useUserContext();
	const navigate = useNavigate();
	const { data, isLoading, isError } = useGetUsers();

	const handleClick = (id: number) => {
		navigate(`/user${id}`);
		setSelectedUserId(id);
	};

	if (isLoading) return <Spinner />;
	if (isError) return <ErrorSign />;

	return (
		<TableContainer component={Box}>
			<Table>
				<TableHead>
					<TableRow>
						<TableCell>ID</TableCell>
						<TableCell align='right'>Name</TableCell>
						<TableCell align='right'>Email</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{generateUserTableRows(data).map((row) => (
						<TableRow
							onClick={() => handleClick(row.id)}
							key={row.name}
							sx={{
								...styles.row,
								backgroundColor: selectedUserId === row.id ? 'rgb(240,240,240)' : 'white',
							}}
						>
							<TableCell>{row.id}</TableCell>
							<TableCell align='right'>{row.name}</TableCell>
							<TableCell align='right'>{row.email}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};
