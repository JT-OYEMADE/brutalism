import Login from 'pages/auth/Login';
import Dashboard from 'pages/Dashboard';
import Register from 'pages/auth/Register';
import Inbox from 'pages/mail/email/Inbox';
import { createBrowserRouter } from 'react-router-dom';
import EmailLayout from 'components/layouts/EmailLayout';
import DashboardLayout from 'components/layouts/DashboardLayout';
import Starred from 'pages/mail/email/Starred';
import Sent from 'pages/mail/email/Sent';
import Important from 'pages/mail/email/Important';
import Drafts from 'pages/mail/email/Drafts';

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
        path: '/mail/email',
        element: <EmailLayout />,
        children: [
          {
            index: true,
            path: '/mail/email/inbox',
            element: <Inbox />,
          },
          {
            path: '/mail/email/starred',
            element: <Starred />,
          },
          {
            path: '/mail/email/sent',
            element: <Sent />,
          },
          {
            path: '/mail/email/important',
            element: <Important />,
          },
          {
            path: '/mail/email/drafts',
            element: <Drafts />,
          },
        ],
      },
    ],
  },
]);
