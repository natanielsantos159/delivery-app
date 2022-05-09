import React from 'react';
import { useRoutes, Navigate } from 'react-router-dom';
import CostumerProducts from '../pages/CostumerProducts';
import Login from '../pages/Login';
import CustomerOrders from '../pages/CustomerOrders';
import CustomerPage from '../pages/CustomerPage';
import Register from '../pages/Register';
import OrderDetails from '../pages/OrderDetails';

export default function Router() {
  return useRoutes([
    {
      path: '/', element: <Navigate to="/login" replace />,
    },
    {
      path: '/login', element: <Login />,
    },
    {
      path: '/register', element: <Register />,
    },
    {
      path: '/customer/',
      element: <CustomerPage />,
      children: [
        { path: '/customer/orders/', element: <CustomerOrders /> },
        { path: '/customer/orders/:id', element: <OrderDetails /> },
        { path: '/customer/products/', element: <CostumerProducts /> },
      ],
    },
  ]);
}
