// material-ui
import { Grid, Typography } from '@mui/material';

// project import
import MainCard from 'components/MainCard';
import ComponentSkeleton from 'pages/components-overview/ComponentSkeleton';

const ProjectCard = ({ project: project }) => {
  const imagePath = require(`assets/images/projects/${project.imageUrl}.jpg`);

  return (
    <ComponentSkeleton>
      <Grid item xs={12} md={6} lg={4}>
        <MainCard sx={{ mt: 2 }} content={false}>
          <div>
            <img src={imagePath} alt="project" />
          </div>
          <Typography variant="h5">{project.name}</Typography>
          <Typography variant="p">{project.description}</Typography>
          <div>
            <a href={'projects/' + project.link}>View Project</a>
          </div>
        </MainCard>
      </Grid>
    </ComponentSkeleton>
  );
};

export default ProjectCard;
