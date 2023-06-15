import { SxProps } from '@mui/material';

export const paper: SxProps = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%,-50%)',
  padding: '20px',
  maxWidth: '250px',
};

export const icon: SxProps = {
  color: 'red',
  fontSize: '60px',
  marginBottom: 2,
};

export const typo: SxProps = {
  fontSize: '22px',
  textAlign: 'center',
};
