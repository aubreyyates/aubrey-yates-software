// material-ui
import { Box, IconButton, useMediaQuery } from '@mui/material';
import { GithubOutlined } from '@ant-design/icons';
import { Link as LinkMaterial } from '@mui/material/index';
import { Link as LinkReact } from 'react-router-dom';

// project import
import Search from './Search';
import Button from '@mui/material/Button';
// import Notification from './Notification';
import MobileSection from './MobileSection';
import { ThemeToggleContext } from 'themes/context';
import { useContext } from 'react';

import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

// ==============================|| HEADER - CONTENT ||============================== //

const HeaderContent = () => {
  const matchesXs = useMediaQuery((theme) => theme.breakpoints.down('lg'));
  const { toggleTheme, themeMode } = useContext(ThemeToggleContext);

  return (
    <>
      {!matchesXs && <Search />}
      {matchesXs && <Box sx={{ width: '100%', ml: 1 }} />}

      <IconButton
        component={LinkMaterial}
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

      <Button
        sx={{ width: { xs: '100%', sm: '250px' }, ml: 1, display: { xs: 'none', lg: 'inherit' } }}
        variant="outlined"
        size="medium"
        component={LinkReact}
        to="contact"
      >
        Contact Me
      </Button>
      {matchesXs && <MobileSection />}
    </>
  );
};

export default HeaderContent;
