import { SxProps } from '@mui/material';

export const container: SxProps = {
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'flex-start',
	flexWrap: 'wrap',
	padding: '0 24px',
};

export const inner: SxProps = {
	position: 'relative',
	width: { xs: '100%', lg: '48%' },
	minHeight: '50vh',
};
