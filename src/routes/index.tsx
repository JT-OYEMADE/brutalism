import DashboardLayout from 'components/layouts/DashboardLayout';
import Email from 'pages/Apps/Email';
import Login from 'pages/auth/Login';
import Register from 'pages/auth/Register';
import Dashboard from 'pages/Dashboard';
import { createBrowserRouter } from 'react-router-dom';

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
