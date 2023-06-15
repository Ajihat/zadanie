import { useLocation, Link } from 'react-router-dom';
import { Box, Breadcrumbs as MuiCrumbs } from '@mui/material';

import { useGenerateCrumbs } from './useGenerateCrumbs';

import * as styles from './Breadcrumbs.styles';

export const Breadcrumbs = () => {
	const location = useLocation();
	const crumbs = useGenerateCrumbs(location.pathname);

	return (
		<Box sx={styles.holder}>
			<MuiCrumbs separator='›' aria-label='breadcrumb'>
				{crumbs.map((crumb) => {
					return (
						<Link
							style={{ fontSize: '18px', color: 'black', textDecoration: 'none' }}
							key={crumb.id}
							to={crumb.to}
						>
							{crumb.text}
						</Link>
					);
				})}
			</MuiCrumbs>
		</Box>
	);
};
