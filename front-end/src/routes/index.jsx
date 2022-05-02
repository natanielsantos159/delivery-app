import React from 'react';
import { useRoutes, Navigate } from 'react-router-dom';
import Login from '../pages/Login';
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
  ]);
}
