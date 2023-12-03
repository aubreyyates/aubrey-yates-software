import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';

// render - dashboard
const DashboardDefault = Loadable(lazy(() => import('pages/dashboard')));

const Projects = Loadable(lazy(() => import('pages/projects')));

const AubreyYatesSoftware = Loadable(lazy(() => import('pages/projects/pages/AubreyYatesSoftware')));
const ProjectManagementApp = Loadable(lazy(() => import('pages/projects/pages/ProjectManagementApp')));
const StopwatchApp = Loadable(lazy(() => import('pages/projects/pages/StopwatchApp')));
const TasksApp = Loadable(lazy(() => import('pages/projects/pages/TasksApp')));

const Blog = Loadable(lazy(() => import('pages/blog')));

const ImplementRepository = Loadable(lazy(() => import('pages/blog/pages/implementRepository/ImplementRepository')));

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
      path: 'projects/aubrey-yates-software',
      element: <AubreyYatesSoftware />
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
      path: 'blog/implement-repository-aspnet-core',
      element: <ImplementRepository />
    },
    {
      path: 'contact',
      element: <Contact />
    }
  ]
};

export default MainRoutes;
