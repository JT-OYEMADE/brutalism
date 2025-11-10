import Login from 'pages/auth/Login';
import Email from 'pages/apps/Email';
import Dashboard from 'pages/Dashboard';
import Register from 'pages/auth/Register';
import { createBrowserRouter } from 'react-router-dom';
import DashboardLayout from 'components/layouts/DashboardLayout';

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
        element: <Email />,
      },
    ],
  },
]);
