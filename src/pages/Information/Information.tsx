import { Box, Typography } from '@mui/material';

import * as styles from './Information.styles';

export const Information = () => {
	return (
		<Box sx={styles.container}>
			<Typography sx={styles.typo}>Select user to see corresponding posts</Typography>
		</Box>
	);
};
