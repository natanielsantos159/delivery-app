import PropTypes from 'prop-types';
import React, { createContext, useState } from 'react';

export const AdminContext = createContext({});

export const AdminProvider = ({ children }) => {
  const [reloadUsers, setReloadUsers] = useState(false);

  const reloadUserList = () => {
    setReloadUsers(true);
  };

  return (
    <AdminContext.Provider value={ { reloadUserList, reloadUsers, setReloadUsers } }>
      {children}
    </AdminContext.Provider>
  );
};

AdminProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
