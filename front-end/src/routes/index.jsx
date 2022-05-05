import React from 'react';
import { useRoutes, Navigate } from 'react-router-dom';
import GuestGuard from '../guards/GuestGuard';
import CostumerProducts from '../pages/CostumerProducts';
import Login from '../pages/Login';
import Register from '../pages/Register';

export default function Router() {
  return useRoutes([
    {
      path: '/', element: <Navigate to="/login" replace />,
    },
    {
      path: '/login',
      element: (
        <GuestGuard>
          <Login />
        </GuestGuard>
      ),
    },
    {
      path: '/register',
      element: (
        <GuestGuard>
          <Register />
        </GuestGuard>
      ),
    },
    {
      path: '/customer/products', element: <CostumerProducts />,
    },
  ]);
}
