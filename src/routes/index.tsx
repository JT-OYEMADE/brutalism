import DashboardLayout from 'components/layouts/DashboardLayout';
import Email from 'pages/Apps/Email';
import Dashboard from 'pages/Dashboard';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <DashboardLayout />,
    children: [
      {
        path: '/',
        element: <Dashboard />,
      },
      {
        path: '/apps/email',
        element: <Email />,
      },
    ],
  },
]);
