import React from 'react';
import { useRoutes, Navigate } from 'react-router-dom';
import GuestGuard from '../guards/GuestGuard';
import CostumerProducts from '../pages/CostumerProducts';
import Login from '../pages/Login';
import CustomerOrders from '../pages/CustomerOrders';
import CustomerPage from '../pages/CustomerPage';
import Register from '../pages/Register';
<<<<<<< HEAD
import SellerOrdersPage from '../pages/SellerOrdersPage';
=======
import OrderDetails from '../pages/OrderDetails';
>>>>>>> ffd2fd256ee9549f63a411bf591740b5ef9330fd
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
<<<<<<< HEAD
      path: '/customer/orders',
      element: <CustomerOrders />,
      children: [{ path: ':id', element: <h1>olá</h1> }],
    },
    {
      path: '/customer/products', element: <CostumerProducts />,
    },
    {
      path: '/seller/orders', element: <SellerOrdersPage />,
    },
    {
      path: '/customer/checkout', element: <CustomerCheckout />,
=======
      path: '/customer/',
      element: <CustomerPage />,
      children: [
        { path: '/customer/orders/', element: <CustomerOrders /> },
        { path: '/customer/orders/:id', element: <OrderDetails /> },
        { path: '/customer/products/', element: <CostumerProducts /> },
        { path: '/customer/checkout', element: <CustomerCheckout /> },
      ],
>>>>>>> ffd2fd256ee9549f63a411bf591740b5ef9330fd
    },
  ]);
}
