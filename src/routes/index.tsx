import Login from 'pages/auth/Login';
import Dashboard from 'pages/Dashboard';
import Register from 'pages/auth/Register';
import { createBrowserRouter } from 'react-router-dom';
import DashboardLayout from 'components/layouts/DashboardLayout';
import EmailLayout from 'components/layouts/EmailLayout';
import Inbox from 'pages/apps/Email/Inbox';

export const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
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
        element: <EmailLayout />,
        children: [
          {
            path: '/apps/email/inbox',
            element: <Inbox />,
          },
        ],
      },
    ],
  },
]);
