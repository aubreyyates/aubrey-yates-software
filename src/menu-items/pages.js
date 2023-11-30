// assets
import { ApartmentOutlined, HomeOutlined } from '@ant-design/icons';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

// icons
const icons = {
  HomeOutlined,
  ApartmentOutlined,
  ChatBubbleOutlineIcon
};

// ==============================|| MENU ITEMS - EXTRA PAGES ||============================== //

const pages = {
  id: 'pages',
  title: 'Pages',
  type: 'group',
  children: [
    {
      id: 'home',
      title: 'Home',
      type: 'item',
      url: '/home',
      icon: icons.HomeOutlined,
      breadcrumbs: false
    },
    {
      id: 'projects',
      title: 'Projects',
      type: 'item',
      url: '/projects',
      icon: icons.ApartmentOutlined
    },
    {
      id: 'blog',
      title: 'Blog',
      type: 'item',
      url: '/blog',
      icon: icons.ChatBubbleOutlineIcon
    }
  ]
};

export default pages;
