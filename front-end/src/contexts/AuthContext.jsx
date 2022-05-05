import PropTypes from 'prop-types';
import React, { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import validToken from '../helpers/jwt';
import { LOGIN, REGISTER_USER } from '../services/user.service';

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
    const initialization = async () => {
      try {
        const user = getUserFromStorage();

        if (user && user.token && validToken(user.token)) {
          setIsAuthenticated(true);
          setUser(user);
          return;
        }
        setIsAuthenticated(false);
        setUser(null);
      } catch (error) {
        console.log(err.message);
      }
    };
    initialization();
  }, []);

  const signUp = async ({ name, email, password }) => {
    const { data } = await REGISTER_USER({
      name,
      email,
      password,
    });
    const { user, token } = data;

    localStorage.setItem('user', JSON.stringify({ ...user, token }));

    setUser(user);
    setIsAuthenticated(true);

    navigate('/customer/products');
  };

  const signIn = async ({ email, password }) => {
    const { data } = await LOGIN({
      email,
      password,
    });
    const { token, user } = data;

    localStorage.setItem('user', JSON.stringify({ token, ...user }));

    setUser(user);
    setIsAuthenticated(true);

    navigate('/customer/products');
  };

  const logout = () => {
    navigate('/login');

    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('user');
    localStorage.removeItem('cart');
  };

  return (
    <AuthContext.Provider value={ { isAuthenticated, userInfo, signIn, signUp, logout } }>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
