import PropTypes from 'prop-types';
import React from 'react';
import { Navigate } from 'react-router-dom';

import useAuth from '../hooks/useAuth';

export default function GuestGuard({ children }) {
  const { isAuthenticated, userInfo } = useAuth();

  if (isAuthenticated) {
    if (userInfo?.role === 'seller') {
      return <Navigate to="/seller/orders" />;
    }

    if (userInfo?.role === 'administrator') {
      return <Navigate to="/admin/manage" />;
    }
    return <Navigate to="/customer/products" />;
  }

  return children;
}

GuestGuard.propTypes = {
  children: PropTypes.node.isRequired,
};
