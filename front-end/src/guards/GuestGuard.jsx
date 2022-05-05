import PropTypes from 'prop-types';
import React from 'react';
import { Navigate } from 'react-router-dom';

import useAuth from '../hooks/useAuth';

export default function GuestGuard({ children }) {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Navigate to="/customer/products" />;
  }

  return { children };
}

GuestGuard.propTypes = {
  children: PropTypes.node.isRequired,
};
