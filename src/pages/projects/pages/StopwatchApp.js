// material-ui
import ProjectPage from '../ProjectPage';
import historyImage from 'assets/images/projects/stopwatch-app/history.jpg';
import mainImage from 'assets/images/projects/stopwatch-app/main.jpg';
// import statsImage from 'assets/images/projects/stopwatch-app/stats.jpg';

const project = {
  name: 'Stopwatch App'
};

const technologies = ['PHP', 'JavaScript', 'Moment JS', 'HTML', 'CSS'];

const links = {
  code: 'https://github.com/aubreyyates/stopwatch-app'
};

const Website = () => {
  return (
    <ProjectPage project={project} technologies={technologies} links={links}>
      The Stopwatch App was a small project I created because I wanted to time myself when doing tasks and see how often I took a break from
      the task. It uses the{' '}
      <a href="https://momentjs.com/" target="_blank" rel="noreferrer">
        Moment JS
      </a>{' '}
      library to do time calculations.
      <br />
      <br />
      <img src={mainImage} alt="stopwatch-app" width="100%"></img>
      <br />
      <br />
      The app has a simple stopwatch that can be started, paused, and reset. There is also stats on how many times the stopwatch has been
      paused since the last reset, how long the stopwatch has been paused, and the average pause time. The sidebar has a history button that
      will take you to a history page. The history page displays timestamps of when a button was pressed on the stopwatch.
      <br />
      <br />
      <img src={historyImage} alt="stopwatch-history" width="100%"></img>
    </ProjectPage>
  );
};

export default Website;
