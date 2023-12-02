// material-ui
import { Grid, Typography, Chip, Button } from '@mui/material';
import { Link } from '../../../node_modules/react-router-dom/dist/index';

import Logo from 'components/Logo/Logo';
import './HomeOverlay.css';

const technologies = [
  'ASP.NET Core 8',
  'REST APIs',
  'C#',
  'React JS',
  'JavaScript',
  'JQuery',
  'PHP',
  'HTML',
  'CSS',
  'MySQL',
  'SQL',
  'Unit Tests',
  'Git',
  'Docker',
  'TypeScript',
  'UI Design',
  'Design Patterns'
];

const HomeOverlay = () => {
  return (
    <div id="home-overlay">
      <div id="home-logo">
        <Logo ratio={2} />
      </div>
      <Grid container rowSpacing={4.5} columnSpacing={2.75}>
        <Grid item xs={3} sx={{ mb: -2.25 }}></Grid>
        <Grid item xs={6} sx={{ mb: -2.25 }}>
          <Typography variant="h3">Skills</Typography>
        </Grid>
        <Grid item xs={3} sx={{ mb: -2.25 }}></Grid>

        <Grid item xs={3} sx={{ mb: -2.25 }}></Grid>
        <Grid item xs={6} sx={{ mb: -2.25 }}>
          {' '}
          {technologies.map((technology, index) => (
            <Chip key={index} label={technology} sx={{ mb: 1, mr: 1 }} />
          ))}
        </Grid>
        <Grid item xs={3} sx={{ mb: -2.25 }}></Grid>

        <Grid item xs={3} sx={{ mb: -2.25 }}></Grid>
        <Grid item xs={6} sx={{ mb: -2.25 }}>
          <Button sx={{ width: '100%' }} variant="contained" size="medium" component={Link} to="../contact">
            Contact Me
          </Button>
        </Grid>
        <Grid item xs={3} sx={{ mb: -2.25 }}></Grid>
      </Grid>
    </div>
  );
};

export default HomeOverlay;
