// material-ui
import { Grid, Typography } from '@mui/material';

import MainCard from 'components/MainCard';

import selfImage from 'assets/images/contact/aubreyyates.png';
import ThreeSphere from 'components/ThreeSphere';

// ==============================|| DASHBOARD - DEFAULT ||============================== //

const Contact = () => {
  return (
    <Grid container rowSpacing={4.5} columnSpacing={2.75} sx={{ p: { xs: 2, sm: 3 } }}>
      <Grid item xs={12} sx={{ mb: -2.25 }}>
        <Typography variant="h3">Contact</Typography>
      </Grid>
      <Grid item xs={12} sx={{ mb: -2.25 }}>
        <MainCard sx={{ mt: 2, boxShadow: 2, minHeight: '302px' }} content={false}>
          <Grid container>
            <Grid item xs={6} sx={{ p: 2 }}>
              <Grid item xs={12}>
                <Typography variant="h4" sx={{ mb: 2 }}>
                  Location: Iowa City, IA
                </Typography>
                <Typography variant="h4" sx={{ mb: 2 }}>
                  Phone: 319-530-0432
                </Typography>
                <Typography variant="h4">Email: aubreyyates999@hotmail.com</Typography>
              </Grid>
              <Grid item xs={12} sx={{ height: '300px', mt: 3 }}>
                <ThreeSphere></ThreeSphere>
              </Grid>
            </Grid>

            <Grid item xs={6}>
              <img src={selfImage} alt="Aubrey Yates"></img>
            </Grid>
          </Grid>
        </MainCard>
      </Grid>
    </Grid>
  );
};

export default Contact;
