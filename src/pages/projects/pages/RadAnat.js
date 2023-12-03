// material-ui
import ProjectPage from '../ProjectPage';
// import historyImage from 'assets/images/projects/stopwatch-app/history.jpg';
import mainImage from 'assets/images/projects/rad-anat/main.jpg';
// import statsImage from 'assets/images/projects/stopwatch-app/stats.jpg';

const project = {
  name: 'Rad Anat'
};

const technologies = ['Electron JS', 'JavaScript', 'JQuery', 'HTML', 'CSS'];

const links = {
  code: 'https://github.com/aubreyyates'
};

const RadAnat = () => {
  return (
    <ProjectPage project={project} technologies={technologies} links={links}>
      Rad Anat is an Electron JS application that was developed for the University of Iowa College of Dentistry. The application show cases
      radiology illustrations by Assata Worrell. The project overseen by Dr. Sindhura Anamali. The application is a set of learning modules
      for College of Dentistry students to use. The applications user interface was beautifully crafted to contain a modern app look and
      feel.
      <br />
      <br />
      <img src={mainImage} alt="rad-anat-home" width="100%"></img>
      <br />
      <br />
    </ProjectPage>
  );
};

export default RadAnat;
