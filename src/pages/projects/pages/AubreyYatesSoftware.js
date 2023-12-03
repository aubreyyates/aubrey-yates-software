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
      Aubrey Yates Software is a website used to display projects I have created, and to share information through my blog. Unlike many blog
      websites that use Wordpress of some other content management system, this project uses React JS. I chose this mainly because I wanted
      to display my ability to create projects with React JS.
      <br />
      <br />
      The home page uses Three JS, a library for creating 3D objects inside a canvas. There is a scene with several shapes and objects. The
      {"scene's"} camera view can be moved with the mouse. Moving the camera view creates an interesting effect where you can zoom around to
      see the objects in different angles.
      <br />
      <br />
      <img src={mainImage} alt="aubrey-yates-software-home" width="100%"></img>
      <br />
      <br />
      The website has a dark and light mode. This is achieved by creating two style themes. Then, making sure every element contains styling
      from the theme. The Light and dark theme can be toggled by pressing the Sun/Moon button in the header.
      <br />
      <br />
      <img src={lightHomepage} alt="aubrey-yates-software-home-light-theme" width="100%"></img>
      <br />
      <br />
    </ProjectPage>
  );
};

export default AubreyYatesSoftware;
