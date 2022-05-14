import React from 'react';
import { useRoutes, Navigate } from 'react-router-dom';
import GuestGuard from '../guards/GuestGuard';
import AuthGuard from '../guards/AuthGuard';
import CustomerProducts from '../pages/CustomerProducts';
import Login from '../pages/Login';
import CustomerOrders from '../pages/CustomerOrders';
import CustomerPage from '../pages/CustomerPage';
import Register from '../pages/Register';
import SellerOrdersPage from '../pages/SellerOrdersPage';
import CustomerOrderDetails from '../pages/CustomerOrderDetails';
import CustomerCheckout from '../pages/CustomerCheckout';
import SellerOrderDetails from '../pages/SellerOrderDetails';
import SellerPage from '../pages/SellerPage';
import AdminPage from '../pages/AdminPage';
import AdminManagement from '../pages/AdminManagement';

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
      path: '/customer',
      element: <CustomerPage />,
      children: [
        { path: 'products', element: <CustomerProducts /> },
        { path: 'checkout', element: <CustomerCheckout /> },
        { path: 'orders', element: <CustomerOrders /> },
        { path: '/customer/orders/:id', element: <CustomerOrderDetails /> },
      ],
    },
    {
      path: '/seller',
      element: <SellerPage />,
      children: [
        { path: 'orders', element: <SellerOrdersPage /> },
        { path: '/seller/orders/:id', element: <SellerOrderDetails /> },
      ],
    },
    {
      path: '/admin',
      element: (
        <AuthGuard>
          <AdminPage />
        </AuthGuard>),
      children: [
        { path: 'manage', element: <AdminManagement /> },
      ],
    },
  ]);
}
