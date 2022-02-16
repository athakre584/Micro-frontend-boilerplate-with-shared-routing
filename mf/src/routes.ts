import React from 'react';
// import Dashboard from './components/dashboard/dashboard';
const Dashboard = React.lazy(() => import('./components/dashboard/dashboard'));

const routes = [
  {
    title: ' Dashboard',
    path: '/dashboard',
    component: Dashboard,
    exact: true,
  },
];

export default routes;
