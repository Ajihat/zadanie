import { Box, AppBar, Toolbar, Icon, Typography } from '@mui/material';
import { Forum } from '@mui/icons-material';

export const Header = () => {
	return (
		<Box>
			<AppBar position='static'>
				<Toolbar>
					<Icon sx={{ mr: 4 }}>
						<Forum sx={{ fontSize: '30px' }} />
					</Icon>
					<Typography variant='h5' component='h1'>
						POSTS FINDER
					</Typography>
				</Toolbar>
			</AppBar>
		</Box>
	);
};
