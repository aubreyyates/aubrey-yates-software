// material-ui
import { Grid, Typography, Chip } from '@mui/material';
import Button from '@mui/material/Button';
import { GithubOutlined } from '@ant-design/icons';
import { Link } from '../../../node_modules/react-router-dom/dist/index';

import Page from 'components/Page';

const ProjectPage = ({ project: project, technologies: technologies, links: links, children }) => {
  return (
    <Page title={project.name}>
      <Grid item xs={12} sx={{ mb: -4, p: 1 }}>
        <Typography variant="p">Technologies Used:</Typography>
      </Grid>
      <Grid item xs={12} sx={{ mb: -2, p: 1 }}>
        {technologies.map((technology, index) => (
          <Chip key={index} label={technology} sx={{ mr: 1, mb: 1 }} />
        ))}
      </Grid>
      <Grid item xs={12} sx={{ mb: -2.25, p: 1 }}>
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
      <Grid item xs={12} sx={{ mb: -2.25, p: 1 }}>
        {children}
      </Grid>
    </Page>
  );
};

export default ProjectPage;
