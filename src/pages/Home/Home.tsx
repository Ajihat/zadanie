import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';

import { Subheader, UsersTable } from '../../components';

import * as styles from './Home.styles';

export const Home = () => {
	return (
		<Box sx={styles.container}>
			<Box sx={styles.inner}>
				<Subheader text='List of users:' />
				<UsersTable />
			</Box>
			<Box sx={styles.inner}>
				<Subheader text='Posts:' />
				<Outlet />
			</Box>
		</Box>
	);
};
