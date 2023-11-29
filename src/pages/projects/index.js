// material-ui
import { Grid, Typography } from '@mui/material';

import projects from './projects';

// project import
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <Grid container rowSpacing={4.5} columnSpacing={2.75}>
      <Grid item xs={12} sx={{ mb: -2.25 }}>
        <Typography variant="h5">Projects</Typography>
      </Grid>
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </Grid>
  );
};

export default Projects;
