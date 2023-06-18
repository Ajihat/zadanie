import { Box, Typography } from '@mui/material';

import * as styles from './NotFound.styles';

export const NotFound = () => {
  return (
    <Box sx={styles.container}>
      <Typography sx={styles.typo}>Page not found</Typography>
    </Box>
  );
};
