// material-ui
import { Box, IconButton, useMediaQuery } from '@mui/material';
import { GithubOutlined } from '@ant-design/icons';

// project import
import Search from './Search';
import Button from '@mui/material/Button';
// import Notification from './Notification';
import MobileSection from './MobileSection';
import { ThemeToggleContext } from 'themes/context';
import { useContext } from 'react';

import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { Link } from '../../../../../node_modules/react-router-dom/dist/index';

// ==============================|| HEADER - CONTENT ||============================== //

const HeaderContent = () => {
  const matchesXs = useMediaQuery((theme) => theme.breakpoints.down('md'));
  const { toggleTheme, themeMode } = useContext(ThemeToggleContext);

  return (
    <>
      {!matchesXs && <Search />}
      {matchesXs && <Box sx={{ width: '100%', ml: 1 }} />}

      <IconButton
        component={Link}
        href="https://github.com/aubreyyates"
        target="_blank"
        color="secondary"
        title="GitHub Link"
        sx={{ color: 'text.primary', bgcolor: 'grey.100' }}
      >
        <GithubOutlined />
      </IconButton>
      <IconButton sx={{ ml: 1, color: 'text.primary', bgcolor: 'grey.100' }} onClick={toggleTheme}>
        {themeMode === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
      </IconButton>

      <Button sx={{ width: '150px', ml: 1 }} variant="outlined" size="medium" component={Link} to="contact">
        Contact Me
      </Button>
      {matchesXs && <MobileSection />}
    </>
  );
};

export default HeaderContent;
