// material-ui
import { Grid, Typography, Chip } from '@mui/material';

const BlogPage = ({ blog: blog, technologies: technologies, children }) => {
  return (
    <Grid container rowSpacing={4.5} columnSpacing={2.75}>
      <Grid item xs={12} sx={{ mb: -2.25 }}>
        <Typography variant="h2">{blog.name}</Typography>
      </Grid>
      <Grid item xs={12} sx={{ mb: -4 }}>
        <Typography variant="p">Technologies Used:</Typography>
      </Grid>
      <Grid item xs={12} sx={{ mb: -2 }}>
        {technologies.map((technology, index) => (
          <Chip key={index} label={technology} sx={{ mr: 1 }} />
        ))}
      </Grid>
      <Grid item xs={12} sx={{ mb: -2.25 }}>
        {children}
      </Grid>
    </Grid>
  );
};

export default BlogPage;
