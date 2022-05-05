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

        if (user.token && validToken(user.token)) {
          if (!user) {
            setIsAuthenticated(false);
            setUser(null);
          }
          setIsAuthenticated(true);
          setUser(user);
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

    navigate('/customer/products');
  };

  return (
    <AuthContext.Provider value={ { isAuthenticated, userInfo, signIn, signUp } }>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
