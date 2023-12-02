// import { useOutletContext } from 'react-router-dom';

import { Grid } from '@mui/material';

import ThreeComponent from 'components/ThreeComponent';
import HomeOverlay from './HomeOverlay';

// ==============================|| DASHBOARD - DEFAULT ||============================== //

const DashboardDefault = () => {
  // const drawerOpen = useOutletContext();

  return (
    <Grid>
      <div style={{ height: '900px', position: 'relative' }}>
        <ThreeComponent></ThreeComponent>
        <HomeOverlay></HomeOverlay>
      </div>
    </Grid>
  );
};

export default DashboardDefault;
