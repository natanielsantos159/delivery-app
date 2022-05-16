import PropTypes from 'prop-types';
import React from 'react';
import { Navigate } from 'react-router-dom';

import useAuth from '../hooks/useAuth';

export default function AuthGuard({ children }) {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

AuthGuard.propTypes = {
  children: PropTypes.node.isRequired,
};
