// material-ui
import { Grid, Typography, Chip } from '@mui/material';
import Page from 'components/Page';

const BlogPage = ({ blog: blog, technologies: technologies, children }) => {
  return (
    <Page title={blog.name}>
      <Grid item xs={12} sx={{ mb: -4 }}>
        <Typography variant="p">Technologies Used:</Typography>
      </Grid>
      <Grid item xs={12} sx={{ mb: -2 }}>
        {technologies.map((technology, index) => (
          <Chip key={index} label={technology} sx={{ mr: 1, mb: 1 }} />
        ))}
      </Grid>
      <Grid item xs={12} sx={{ mb: -2.25 }}>
        {children}
      </Grid>
    </Page>
  );
};

export default BlogPage;
