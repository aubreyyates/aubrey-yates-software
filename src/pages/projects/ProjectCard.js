// material-ui
import { Grid, Typography } from '@mui/material';

// project import
import MainCard from 'components/MainCard';
import ComponentSkeleton from 'pages/components-overview/ComponentSkeleton';
import { Link } from '../../../node_modules/react-router-dom/dist/index';
import Php from 'components/technologyCards/Php';
import DotNet from 'components/technologyCards/DotNet';
import React from 'components/technologyCards/React';
import Electron from 'components/technologyCards/Electron';

const ProjectCard = ({ project: project }) => {
  const imagePath = require(`assets/images/projects/${project.imageUrl}/main.jpg`);

  return (
    <ComponentSkeleton>
      <Grid item xs={12} md={6} lg={4}>
        <Link to={project.link} style={{ textDecoration: 'none' }}>
          <MainCard sx={{ mt: 2, boxShadow: 2, minHeight: { md: '460px', lg: '340px' } }} content={false}>
            <Grid item sx={{ postition: 'relative' }}>
              {project.technologies.includes('php') && <Php />}
              {project.technologies.includes('react') && <React />}
              {project.technologies.includes('dotnet') && <DotNet />}
              {project.technologies.includes('electron') && <Electron />}
              <div>
                <img src={imagePath} style={{ width: '100%', height: 'auto' }} alt="project" />
              </div>
            </Grid>
            <Grid item sx={{ p: 1 }}>
              <Typography variant="h4">{project.name}</Typography>
            </Grid>
            <Grid item sx={{ p: 1 }}>
              <Typography variant="p">{project.description}</Typography>
            </Grid>
          </MainCard>
        </Link>
      </Grid>
    </ComponentSkeleton>
  );
};

export default ProjectCard;
