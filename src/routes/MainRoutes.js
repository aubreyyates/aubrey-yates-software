import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';

// render - dashboard
const DashboardDefault = Loadable(lazy(() => import('pages/dashboard')));

const Projects = Loadable(lazy(() => import('pages/projects')));

const Website = Loadable(lazy(() => import('pages/projects/pages/Website')));
const ProjectManagementApp = Loadable(lazy(() => import('pages/projects/pages/ProjectManagementApp')));

const Blog = Loadable(lazy(() => import('pages/blog')));

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
      path: 'blog',
      element: <Blog />
    }
  ]
};

export default MainRoutes;
