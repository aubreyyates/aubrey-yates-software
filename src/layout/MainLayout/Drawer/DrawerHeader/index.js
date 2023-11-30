import PropTypes from 'prop-types';

// material-ui
import { useTheme } from '@mui/material/styles';
// import { Stack } from '@mui/material';

// project import
import DrawerHeaderStyled from './DrawerHeaderStyled';
import Logo from 'components/Logo';
import Box from '@mui/material/Box';

// ==============================|| DRAWER HEADER ||============================== //

const DrawerHeader = ({ open }) => {
  const theme = useTheme();

  return (
    // only available in paid version
    <DrawerHeaderStyled theme={theme} open={open}>
      <Box display="flex" alignItems="center" justifyContent="center" height="100%">
        <Logo />
      </Box>
    </DrawerHeaderStyled>
  );
};

DrawerHeader.propTypes = {
  open: PropTypes.bool
};

export default DrawerHeader;
