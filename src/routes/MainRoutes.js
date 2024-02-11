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
const RadAnat = Loadable(lazy(() => import('pages/projects/pages/RadAnat')));

const Blog = Loadable(lazy(() => import('pages/blog')));

const ImplementRepository = Loadable(lazy(() => import('pages/blog/pages/implementRepository/ImplementRepository')));
const Solid = Loadable(lazy(() => import('pages/blog/pages/solid/Solid')));
const RestfulApis = Loadable(lazy(() => import('pages/blog/pages/restfulApis/RestfulApis')));
const CleanArchitecture = Loadable(lazy(() => import('pages/blog/pages/cleanArchitecture/CleanArchitecture')));

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
      path: 'projects/rad-anat',
      element: <RadAnat />
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
      path: 'blog/solid-design-principles',
      element: <Solid />
    },
    {
      path: 'blog/restful-apis',
      element: <RestfulApis />
    },
    {
      path: 'blog/clean-architecture',
      element: <CleanArchitecture />
    },
    {
      path: 'contact',
      element: <Contact />
    }
  ]
};

export default MainRoutes;
