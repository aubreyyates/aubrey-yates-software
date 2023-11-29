// material-ui
import ProjectPage from '../ProjectPage';

const project = {
  name: 'Website'
};

const technologies = ['React JS'];
const links = {
  code: 'https://github.com/aubreyyates'
};

const Website = () => {
  return (
    <ProjectPage project={project} technologies={technologies} links={links}>
      The Website project is used to display projects I have created and to share information through my blog. Unlike many blog websites
      that use Wordpress of some other content management system, this project uses React JS. I chose this mainly because I wanted to
      display my ability to create projects with React JS.
    </ProjectPage>
  );
};

export default Website;
