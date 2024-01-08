// material-ui
import { Grid, Typography } from '@mui/material';

// project import
import MainCard from 'components/MainCard';
import ComponentSkeleton from 'pages/components-overview/ComponentSkeleton';
import { Link } from '../../../node_modules/react-router-dom/dist/index';
import DotNet from '../../components/technologyCards/DotNet';

const BlogCard = ({ blog: blog }) => {
  const imagePath = require(`assets/images/blogs/${blog.imageUrl}.jpg`);

  return (
    <ComponentSkeleton>
      <Grid item xs={12} md={6} lg={4}>
        <Link to={blog.link} style={{ textDecoration: 'none' }}>
          <MainCard sx={{ mt: 2, boxShadow: 2, minHeight: { lg: '500px' } }} content={false}>
            <Grid item sx={{ position: 'relative' }}>
              {blog.technologies.includes('dotnet') && <DotNet />}
              {/* ({blog.technologies.contains('react')} && <DotNet />)
              ({blog.technologies.contains('dotnet')} && <DotNet />) */}
              <div>
                <img src={imagePath} style={{ width: '100%', height: 'auto' }} alt="blog" />
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
