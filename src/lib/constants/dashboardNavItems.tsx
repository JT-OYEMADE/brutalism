import { GrAnnounce } from 'react-icons/gr';
import { IoIosApps } from 'react-icons/io';
import { IoAnalyticsOutline } from 'react-icons/io5';
import { LuBriefcaseBusiness } from 'react-icons/lu';
import { MdCorporateFare } from 'react-icons/md';
import { RiAppsLine, RiBookletLine, RiDoorLine, RiUserLine } from 'react-icons/ri';
import { RxComponent1 } from 'react-icons/rx';
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
    icon: <GrAnnounce className='w-5 h-5' />,
  },
  {
    name: 'Analytics',
    href: '/analytics',
    icon: <IoAnalyticsOutline className='w-5 h-5' />,
  },
  {
    name: 'Business',
    href: '/business',
    icon: <LuBriefcaseBusiness className='w-5 h-5' />,
  },
  {
    name: 'Project',
    href: '/project',
    icon: <SiGooglemarketingplatform className='w-5 h-5' />,
  },
  {
    name: 'HRM',
    href: '/hrm',
    icon: <MdCorporateFare className='w-5 h-5' />,
  },
  {
    name: 'Mobile App',
    href: '/mobile-app',
    icon: <RiAppsLine className='w-5 h-5' />,
  },
  {
    name: 'Components',
    key: '/components',
    icon: <RxComponent1 className='w-5 h-5' />,
    sub: [],
  },
  {
    name: 'Pages',
    key: '/pages',
    icon: <RiDoorLine className='w-5 h-5' />,
    sub: [],
  },
  {
    name: 'Apps',
    key: '/apps',
    icon: <IoIosApps className='w-5 h-5' />,
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
    icon: <RiUserLine className='w-5 h-5' />,
    sub: [],
  },
  {
    name: 'Documentations',
    key: '/documentations',
    icon: <RiBookletLine className='w-5 h-5' />,
    sub: [],
  },
];

export default navItems;
