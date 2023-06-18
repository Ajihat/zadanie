import { useLocation, Link } from 'react-router-dom';
import { Box, Breadcrumbs as MuiCrumbs } from '@mui/material';

import { generateCrumbs } from './generateCrumbs';
import * as styles from './Breadcrumbs.styles';

export const Breadcrumbs = () => {
  const location = useLocation();
  const crumbs = generateCrumbs(location.pathname);

  return (
    <Box sx={styles.holder}>
      <MuiCrumbs separator="›" aria-label="breadcrumb">
        {crumbs.map(crumb => {
          return (
            <Box component={Link} sx={styles.link} key={crumb.id} to={crumb.to}>
              {crumb.text}
            </Box>
          );
        })}
      </MuiCrumbs>
    </Box>
  );
};
