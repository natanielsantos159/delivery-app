import React from 'react';
import { useRoutes, Navigate } from 'react-router-dom';
import Login from '../pages/Login';
import CustomerOrders from '../pages/CustomerOrders';
import Products from '../pages/Products';
import Register from '../pages/Register';

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
      path: '/customer/products', element: <Products />,
    },
    {
      path: '/customer/orders', element: <CustomerOrders />,
    },
  ]);
}
