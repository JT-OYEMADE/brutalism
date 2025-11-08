import DashboardLayout from 'components/layouts/DashboardLayout';
import Email from 'pages/Apps/Email';
import Login from 'pages/auth/Login';
import Dashboard from 'pages/Dashboard';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />,
  },
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
