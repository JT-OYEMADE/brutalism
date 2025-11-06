import { SiGooglemarketingplatform } from 'react-icons/si';

interface SubMenuItem {
  name: string;
  href: string;
}

interface NavItem {
  name: string;
  href?: string;
  key?: string;
  icon: string | any;
  activeIcon?: string;
  sub?: SubMenuItem[];
}

const navItems: NavItem[] = [
  {
    name: 'Marketing',
    href: '/',
    icon: <SiGooglemarketingplatform className='w-5 h-5' />,
  },
  {
    name: 'Analytics',
    href: '/analytics',
    icon: <SiGooglemarketingplatform className='w-5 h-5' />,
  },
  {
    name: 'Business',
    href: '/business',
    icon: <SiGooglemarketingplatform className='w-5 h-5' />,
  },
  {
    name: 'Project',
    href: '/project',
    icon: <SiGooglemarketingplatform className='w-5 h-5' />,
  },
  {
    name: 'HRM',
    href: '/hrm',
    icon: <SiGooglemarketingplatform className='w-5 h-5' />,
  },
  {
    name: 'Mobile App',
    href: '/mobile-app',
    icon: <SiGooglemarketingplatform className='w-5 h-5' />,
  },
  {
    name: 'Components',
    key: '/components',
    icon: <SiGooglemarketingplatform className='w-5 h-5' />,
    sub: [],
  },
  {
    name: 'Pages',
    key: '/pages',
    icon: <SiGooglemarketingplatform className='w-5 h-5' />,
    sub: [],
  },
  {
    name: 'Apps',
    key: '/apps',
    icon: <SiGooglemarketingplatform className='w-5 h-5' />,
    sub: [
      {
        name: 'Calendar',
        href: '/apps/calendar',
      },
      {
        name: 'Email',
        href: '/apps/email',
      },
      {
        name: 'Invoice',
        href: '/apps/invoice',
      },
      {
        name: 'Charts',
        href: '/apps/charts',
      },
      {
        name: 'Widgets',
        href: '/apps/widgets',
      },
    ],
  },
  {
    name: 'Users',
    key: '/users',
    icon: <SiGooglemarketingplatform className='w-5 h-5' />,
    sub: [],
  },
  {
    name: 'Documentations',
    key: '/documentations',
    icon: <SiGooglemarketingplatform className='w-5 h-5' />,
    sub: [],
  },
];

export default navItems;
