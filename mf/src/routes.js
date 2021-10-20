import React from 'react';
const Dashboard = React.lazy(() => import('GlobalComponents/dashboard'));

const routes = [
  {
    title: ' Dashboard',
    path: '/dashboard',
    component: Dashboard,
    exact: true,
  },
];

export default routes;
