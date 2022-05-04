import PropTypes from 'prop-types';
import React, { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LOGIN } from '../services/user.service';

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  const isAuthenticated = false;
  const [userInfo, setUser] = useState();

  const signIn = async ({ email, password }) => {
    const { data } = await LOGIN({
      email,
      password,
    });
    const { token, user } = data;

    localStorage.setItem('user', JSON.stringify({ token, ...user }));

    setUser(user);

    navigate('/customer/products');
  };

  return (
    <AuthContext.Provider value={ { isAuthenticated, userInfo, signIn } }>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
