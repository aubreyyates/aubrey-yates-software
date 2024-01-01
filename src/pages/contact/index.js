// material-ui
import { Grid, Typography } from '@mui/material';
import { useContext } from 'react';

import { useTheme } from '@mui/material/styles';
import MainCard from 'components/MainCard';

import darkBackground from 'assets/images/contact/dark-background.svg';
import lightBackground from 'assets/images/contact/light-background.svg';

import { ThemeToggleContext } from 'themes/context';
import { Box } from '../../../node_modules/@mui/material/index';

// import selfImage from 'assets/images/contact/aubreyyates.png';
// import ThreeSphere from 'components/ThreeSphere';

// ==============================|| DASHBOARD - DEFAULT ||============================== //

const Contact = () => {
  const theme = useTheme();
  const { themeMode } = useContext(ThemeToggleContext);

  return (
    <Grid container rowSpacing={4.5} columnSpacing={2.75}>
      <Grid item xs={12} sx={{ mb: -2.25 }}>
        <Typography variant="h3">Contact</Typography>
      </Grid>
      <Grid item xs={12} sx={{ mb: -2.25 }}>
        <MainCard sx={{ mt: 2, boxShadow: 2, minHeight: '50vh', position: 'relative' }} content={false}>
          <Grid container>
            <Grid item xs={12} md={4} sx={{ p: 6 }}>
              <Typography variant="h4">
                Send me mail or call me.
                <br />
                <br />
                Reach out.
              </Typography>
              <br />
              <br />
              <Typography variant="h4">{"I'm ready to help you build something"}</Typography>
              <Typography variant="h4" sx={{ color: theme.palette.primary.main }}>
                amazing.
              </Typography>
            </Grid>
            <Grid
              style={{
                backgroundImage: `url(${themeMode === 'light' ? lightBackground : darkBackground})`,
                backgroundSize: 'cover', // or 'contain' depending on your needs
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center'
              }}
              sx={{ backgroundColor: theme.palette.primary.main, minHeight: '50vh' }}
              item
              xs={12}
              md={8}
            ></Grid>
          </Grid>
          <Box
            sx={{
              position: 'absolute',
              top: { xs: '80%', md: '10vh' },
              transform: { xs: 'translate(-50%, -50%);', md: 'inherit' },
              left: { xs: '50%', md: 'calc(33.3% - 12px)' }
            }}
          >
            <Box sx={{ backgroundColor: theme.palette.primary.darker, p: 1, mb: 4, borderRadius: '2px' }}>
              <Typography variant="h6" sx={{ color: '#fff' }}>
                Location: Iowa City, IA
              </Typography>
            </Box>
            <Box sx={{ backgroundColor: theme.palette.primary.darker, p: 1, mb: 4, borderRadius: '2px' }}>
              <Typography variant="h6" sx={{ color: '#fff' }}>
                Phone: 319-530-0432
              </Typography>
            </Box>
            <Box sx={{ backgroundColor: theme.palette.primary.darker, p: 1, mb: 4, borderRadius: '2px' }}>
              <Typography variant="h6" sx={{ color: '#fff' }}>
                Email: aubreyyates999@hotmail.com
              </Typography>
            </Box>
          </Box>
        </MainCard>
      </Grid>
    </Grid>
  );
};

export default Contact;
