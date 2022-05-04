import PropTypes from 'prop-types';
import React, { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LOGIN } from '../services/user.service';

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [userInfo, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const getUserFromStorage = () => {
    const user = localStorage.getItem('user');

    if (user) {
      const ParsedUser = JSON.parse(user);
      return ParsedUser;
    }
    return null;
  };

  useEffect(() => {
    const validUser = getUserFromStorage();

    setIsAuthenticated(!!validUser);
  }, []);

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
