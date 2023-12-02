import ThreeComponent from 'components/Three';
import HomeOverlay from './HomeOverlay';

// ==============================|| DASHBOARD - DEFAULT ||============================== //

const DashboardDefault = () => {
  return (
    <div style={{ height: '70vh', position: 'relative' }}>
      <ThreeComponent></ThreeComponent>
      <HomeOverlay></HomeOverlay>
    </div>
  );
};

export default DashboardDefault;
