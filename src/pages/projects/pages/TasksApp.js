// material-ui
import ProjectPage from '../ProjectPage';
import mainImage from 'assets/images/projects/tasks-app/main.jpg';
import homeImage from 'assets/images/projects/tasks-app/home.jpg';
import settingsImage from 'assets/images/projects/tasks-app/settings.jpg';

const project = {
  name: 'Tasks App'
};

const technologies = ['JavaScript', 'JQuery', 'HTML', 'CSS'];

const links = {
  code: 'https://github.com/aubreyyates'
};

const TasksApp = () => {
  return (
    <ProjectPage project={project} technologies={technologies} links={links}>
      The Tasks App is an app that contains simple tasks, but it also has a few interesting features in it. It has a simple data report on
      the home page.
      <br />
      <br />
      <img src={homeImage} alt="home-page" width="100%"></img>
      <br />
      <br />
      On the tasks page, your tasks are listed for you. The priority is colored green, yellow, or red. You can create new tasks. You can
      also mark the tasks as complete with the check button. The tasks page has a simple undo mechanism too.
      <br />
      <br />
      <img src={mainImage} alt="tasks-page" width="100%"></img>
      <br />
      <br />
      There is also a settings page that allows you to sort your tasks and reset all data.
      <br />
      <br />
      <img src={settingsImage} alt="settings-page" width="100%"></img>
    </ProjectPage>
  );
};

export default TasksApp;
