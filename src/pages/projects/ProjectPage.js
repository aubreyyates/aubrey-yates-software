// material-ui
import { Grid, Typography, Chip } from '@mui/material';
import Button from '@mui/material/Button';
import { GithubOutlined } from '@ant-design/icons';
import { Link } from '../../../node_modules/react-router-dom/dist/index';

const ProjectPage = ({ project: project, technologies: technologies, links: links, children }) => {
  return (
    <Grid container rowSpacing={4.5} columnSpacing={2.75}>
      <Grid item xs={12} sx={{ mb: -2.25 }}>
        <Typography variant="h2">{project.name}</Typography>
      </Grid>
      <Grid item xs={12} sx={{ mb: -4 }}>
        <Typography variant="p">Technologies Used:</Typography>
      </Grid>
      <Grid item xs={12} sx={{ mb: -2 }}>
        {technologies.map((technology, index) => (
          <Chip key={index} label={technology} sx={{ mr: 1 }} />
        ))}
      </Grid>
      {/* <Grid item xs={12} sx={{ mb: -2.25 }}>
        <Typography variant="p">Links</Typography>
      </Grid> */}
      <Grid item xs={12} sx={{ mb: -2.25 }}>
        <Button
          component={Link}
          to={links.code}
          variant="outlined"
          target="_blank"
          color="secondary"
          sx={{ width: '80px', color: 'text.primary', bgcolor: 'grey.100' }}
        >
          <GithubOutlined />
          <Typography variant="p" sx={{ ml: 1 }}>
            Repo
          </Typography>
        </Button>
      </Grid>
      <Grid item xs={12} sx={{ mb: -2.25 }}>
        {children}
      </Grid>
    </Grid>
  );
};

export default ProjectPage;
