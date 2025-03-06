import { lazy } from 'react';
import routesData from './routes.json';

export const getRoutes = () => {
  return routesData.map(route => ({
    path: route.path,
    element: lazy(() => import(`../components/${route.component}`)),
  }));
};
