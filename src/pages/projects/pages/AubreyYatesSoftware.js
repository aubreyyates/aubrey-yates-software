// material-ui
import ProjectPage from '../ProjectPage';

import mainImage from 'assets/images/projects/aubrey-yates-software/main.jpg';
import lightHomepage from 'assets/images/projects/aubrey-yates-software/light-homepage.jpg';

const project = {
  name: 'Aubrey Yates Software'
};

const technologies = ['React JS', 'Three JS', 'MUI Material', 'JavaScript', 'HTML', 'CSS'];
const links = {
  code: 'https://github.com/aubreyyates/aubrey-yates-software'
};

const AubreyYatesSoftware = () => {
  return (
    <ProjectPage project={project} technologies={technologies} links={links}>
      Aubrey Yates Software is a website used to display projects I have created and to share information through my blog. Unlike many blog
      websites that use Wordpress of some other content management system, this project uses React JS. I chose this mainly because I wanted
      to display my ability to create projects with React JS.
      <br />
      <br />
      The home page uses Three JS, a library for creating 3D objects inside a canvas. The camera view can be moved with the mouse. This
      creates a cool effect where you can zoom around the objects.
      <br />
      <br />
      <img src={mainImage} alt="aubrey-yates-software-home" width="100%"></img>
      <br />
      <br />
      The website has a dark and light mode. This was achieved by creating two themes, then making sure every element has its colors come
      from the theme. Light and dark theme can be toggled with the Sun/Moon button in the header.
      <br />
      <br />
      <img src={lightHomepage} alt="aubrey-yates-software-home-light-theme" width="100%"></img>
      <br />
      <br />
    </ProjectPage>
  );
};

export default AubreyYatesSoftware;
