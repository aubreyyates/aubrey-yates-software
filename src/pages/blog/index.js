// material-ui
import { Grid, Typography } from '@mui/material';
import ComponentSkeleton from 'pages/components-overview/ComponentSkeleton';
import BlogCard from './BlogCard';

import blogs from './blogs';

const Blog = () => {
  return (
    <ComponentSkeleton>
      <Grid container rowSpacing={4.5} columnSpacing={2.75} sx={{ p: { xs: 2, sm: 3 } }}>
        <Grid item xs={12} sx={{ mb: -2.25 }}>
          <Typography variant="h3">Blog</Typography>
        </Grid>
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </Grid>
    </ComponentSkeleton>
  );
};

export default Blog;
