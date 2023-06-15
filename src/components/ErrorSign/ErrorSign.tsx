import { Paper, Typography } from '@mui/material';
import { Error } from '@mui/icons-material';

import * as styles from './ErrorSign.styles';

export const ErrorSign = () => {
  return (
    <Paper sx={styles.paper}>
      <Error sx={styles.icon} fontSize="large" />
      <Typography sx={styles.typo}>
        We are sorry, something went wrong. Try again later
      </Typography>
    </Paper>
  );
};
