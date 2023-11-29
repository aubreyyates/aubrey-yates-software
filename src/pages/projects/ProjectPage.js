// material-ui
import { Grid, Typography } from '@mui/material';

const ProjectPage = ({ project: project, technologies: technologies, links: links, children }) => {
  return (
    <Grid container rowSpacing={4.5} columnSpacing={2.75}>
      <Grid item xs={12} sx={{ mb: -2.25 }}>
        <Typography variant="h2">{project.name}</Typography>
      </Grid>
      <Grid item xs={12} sx={{ mb: -2.25 }}>
        <Typography variant="p">Technologies Used</Typography>
        <ul>
          {technologies.map((technology, index) => (
            <li key={index}>{technology}</li>
          ))}
        </ul>
      </Grid>
      <Grid item xs={12} sx={{ mb: -2.25 }}>
        <Typography variant="p">Links</Typography>
        <Typography variant="p">Code: {links.code}</Typography>
        {/* <Typography variant="p">Code: {links.code}</Typography> */}
      </Grid>
      <Grid item xs={12} sx={{ mb: -2.25 }}>
        {children}
      </Grid>
    </Grid>
  );
};

export default ProjectPage;
