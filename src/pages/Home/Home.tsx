import { useEffect } from 'react';
import { Box } from '@mui/material';
import { Outlet, useLocation } from 'react-router-dom';

import { Subheader, UsersTable } from '../../components';
import { useUserContext } from '../../context/UserContext/useUserContext';
import { appRoutes } from '../../appRoutes/appRoutes';

import * as styles from './Home.styles';

export const Home = () => {
	const location = useLocation();
	const { setSelectedUserId } = useUserContext();

	useEffect(() => {
		if (location.pathname === appRoutes.home) {
			setSelectedUserId(null);
		}
	}, [location.pathname, setSelectedUserId]);

	return (
		<Box sx={styles.container}>
			<Box sx={styles.inner}>
				<Subheader text='List of users:' />
				<UsersTable />
			</Box>
			<Box sx={styles.inner}>
				<Outlet />
			</Box>
		</Box>
	);
};
