import { createBrowserRouter } from 'react-router';
import WelcomePage from '../pages/welcome/WelcomePage';
import DashboardLayout from '@/layouts/dashboardLayout';

const router = createBrowserRouter([
  {
    path: '/',
    Component: DashboardLayout,
    children: [
      {
        index: true,
        Component: WelcomePage,
      },
    ],
  },
]);

export { router };
