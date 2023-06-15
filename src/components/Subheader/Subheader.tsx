import { Typography } from '@mui/material';

import { SubheaderProps } from './Subheader.types';

export const Subheader = ({ text }: SubheaderProps) => {
	return (
		<Typography
			variant='h6'
			component='h2'
			sx={{ padding: '10px', backgroundColor: 'rgb(220,220,220)', fontSize: 'px' }}
		>
			{text}
		</Typography>
	);
};
