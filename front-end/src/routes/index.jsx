import React from 'react';
import { useRoutes, Navigate } from 'react-router-dom';
import GuestGuard from '../guards/GuestGuard';
import CostumerProducts from '../pages/CostumerProducts';
import Login from '../pages/Login';
import CustomerOrders from '../pages/CustomerOrders';
import Register from '../pages/Register';
import CustomerCheckout from '../pages/CustomerCheckout';

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
      path: '/customer/orders',
      element: <CustomerOrders />,
      children: [{ path: ':id', element: 'olá' }],
    },
    {
      path: '/customer/products', element: <CostumerProducts />,
    },
    {
      path: '/customer/checkout', element: <CustomerCheckout />,
    },
  ]);
}
