// material-ui
import { Grid, Typography } from '@mui/material';
import ComponentSkeleton from 'pages/components-overview/ComponentSkeleton';

const Blog = () => {
  return (
    <ComponentSkeleton>
      <Grid container rowSpacing={4.5} columnSpacing={2.75}>
        <Grid item xs={12} sx={{ mb: -2.25 }}>
          <Typography variant="h5">Blog</Typography>
        </Grid>
      </Grid>
    </ComponentSkeleton>
  );
};

export default Blog;
