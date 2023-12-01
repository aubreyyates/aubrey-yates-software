import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';

// render - dashboard
const DashboardDefault = Loadable(lazy(() => import('pages/dashboard')));

const Projects = Loadable(lazy(() => import('pages/projects')));

const Website = Loadable(lazy(() => import('pages/projects/pages/Website')));
const ProjectManagementApp = Loadable(lazy(() => import('pages/projects/pages/ProjectManagementApp')));
const StopwatchApp = Loadable(lazy(() => import('pages/projects/pages/StopwatchApp')));
const TasksApp = Loadable(lazy(() => import('pages/projects/pages/TasksApp')));

const Blog = Loadable(lazy(() => import('pages/blog')));

const HowToEatFriedRice = Loadable(lazy(() => import('pages/blog/pages/HowToEatFriedRice')));

const Contact = Loadable(lazy(() => import('pages/contact')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <DashboardDefault />
    },
    {
      path: 'home',
      element: <DashboardDefault />
    },
    {
      path: 'projects',
      element: <Projects />
    },
    {
      path: 'projects/website',
      element: <Website />
    },
    {
      path: 'projects/project-management-app',
      element: <ProjectManagementApp />
    },
    {
      path: 'projects/stopwatch-app',
      element: <StopwatchApp />
    },
    {
      path: 'projects/tasks-app',
      element: <TasksApp />
    },
    {
      path: 'blog',
      element: <Blog />
    },
    {
      path: 'blog/how-to-eat-fried-rice',
      element: <HowToEatFriedRice />
    },
    {
      path: 'contact',
      element: <Contact />
    }
  ]
};

export default MainRoutes;
