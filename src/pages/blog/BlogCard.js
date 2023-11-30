// material-ui
import { Grid, Typography } from '@mui/material';

// project import
import MainCard from 'components/MainCard';
import ComponentSkeleton from 'pages/components-overview/ComponentSkeleton';
import { Link } from '../../../node_modules/react-router-dom/dist/index';

const BlogCard = ({ blog: blog }) => {
  const imagePath = require(`assets/images/blogs/${blog.imageUrl}.jpg`);

  return (
    <ComponentSkeleton>
      <Grid item xs={12} md={6} lg={4}>
        <Link to={blog.link}>
          <MainCard sx={{ mt: 2, boxShadow: 2 }} content={false}>
            <Grid item>
              <div>
                <img src={imagePath} alt="blog" />
              </div>
            </Grid>
            <Grid item sx={{ p: 1 }}>
              <Typography variant="h4">{blog.name}</Typography>
            </Grid>
            <Grid item sx={{ p: 1 }}>
              <Typography variant="p">{blog.description}</Typography>
            </Grid>
          </MainCard>
        </Link>
      </Grid>
    </ComponentSkeleton>
  );
};

export default BlogCard;
