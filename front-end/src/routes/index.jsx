import React from 'react';
import { useRoutes, Navigate } from 'react-router-dom';
import GuestGuard from '../guards/GuestGuard';
import CostumerProducts from '../pages/CostumerProducts';
import Login from '../pages/Login';
import CustomerOrders from '../pages/CustomerOrders';
import CustomerPage from '../pages/CustomerPage';
import Register from '../pages/Register';
import SellerOrdersPage from '../pages/SellerOrdersPage';
import CustomerOrderDetails from '../pages/CustomerOrderDetails';
import CustomerCheckout from '../pages/CustomerCheckout';
import SellerOrderDetails from '../pages/SellerOrderDetails';

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
      path: '/customer/',
      element: <CustomerPage />,
      children: [
        { path: '/customer/orders/', element: <CustomerOrders /> },
        { path: '/customer/orders/:id', element: <CustomerOrderDetails /> },
        { path: '/customer/products/', element: <CostumerProducts /> },
        { path: '/customer/checkout', element: <CustomerCheckout /> },
      ],
    },
    {
      path: '/seller/orders',
      element: <SellerOrdersPage />,
    },
    { path: '/seller/orders/:id', element: <SellerOrderDetails /> },
  ]);
}
