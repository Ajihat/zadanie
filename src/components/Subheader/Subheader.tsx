import { Typography } from '@mui/material';

import { SubheaderProps } from './Subheader.types';
import * as styles from './Subheader.styles';

export const Subheader = ({ text }: SubheaderProps) => {
  return (
    <Typography sx={styles.typo} variant="h6" component="h2">
      {text}
    </Typography>
  );
};
