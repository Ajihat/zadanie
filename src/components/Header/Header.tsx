import { Box, AppBar, Toolbar, Icon, Typography } from '@mui/material';
import { Forum } from '@mui/icons-material';

import * as styles from './Header.styles';

export const Header = () => {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Icon sx={styles.iconHolder}>
            <Forum sx={styles.icon} />
          </Icon>
          <Typography variant="h5" component="h1">
            POSTS FINDER
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
