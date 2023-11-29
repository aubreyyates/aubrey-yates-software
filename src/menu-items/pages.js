// assets
import { LoginOutlined, ProfileOutlined } from '@ant-design/icons';

// icons
const icons = {
  LoginOutlined,
  ProfileOutlined
};

// ==============================|| MENU ITEMS - EXTRA PAGES ||============================== //

const pages = {
  id: 'pages',
  title: 'Pages',
  type: 'group',
  children: [
    {
      id: 'projects',
      title: 'Projects',
      type: 'item',
      url: '/projects',
      icon: icons.LoginOutlined
    },
    {
      id: 'blog',
      title: 'Blog',
      type: 'item',
      url: '/blog',
      icon: icons.ProfileOutlined
    }
  ]
};

export default pages;
