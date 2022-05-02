import React from 'react';
import { useRoutes, Navigate } from 'react-router-dom';
import CostumerProducts from '../pages/CostumerProducts';
import Login from '../pages/Login';

export default function Router() {
  return useRoutes([
    {
      path: '/', element: <Navigate to="/login" replace />,
    },
    {
      path: '/login', element: <Login />,
    },
    {
      path: '/customer/products', element: <CostumerProducts />,
    },
  ]);
}
