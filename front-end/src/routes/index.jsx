import React from 'react';
import { useRoutes, Navigate } from 'react-router-dom';
import GuestGuard from '../guards/GuestGuard';
import CostumerProducts from '../pages/CostumerProducts';
import Login from '../pages/Login';
import CustomerOrders from '../pages/CustomerOrders';
import Register from '../pages/Register';
import CustomerCheckout from '../pages/CustomerCheckout';
import AdminManage from '../pages/AdminManage';

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
      children: [{ path: ':id', element: <h1>olá</h1> }],
    },
    {
      path: '/customer/products', element: <CostumerProducts />,
    },
    {
      path: '/customer/checkout', element: <CustomerCheckout />,
    },
    {
      path: '/admin/manage', element: <AdminManage />,
    },
  ]);
}
