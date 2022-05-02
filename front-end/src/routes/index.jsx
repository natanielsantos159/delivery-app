import React from 'react';
import { useRoutes, Navigate } from 'react-router-dom';
import Login from '../pages/Login';
import Products from '../pages/Products';

export default function Router() {
  return useRoutes([
    {
      path: '/', element: <Navigate to="/login" replace />,
    },
    {
      path: '/login', element: <Login />,
    },
    {
      path: '/customer/products', element: <Products />,
    },
  ]);
}
