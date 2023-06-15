import { Box, CircularProgress } from '@mui/material';

import * as styles from './Spinner.styles';

export const Spinner = () => {
  return (
    <Box sx={styles.box}>
      <CircularProgress />
    </Box>
  );
};
