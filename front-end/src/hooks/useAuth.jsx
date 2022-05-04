import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) throw new Error('Auth context must be inside the Auth provider');

  return context;
};

export default useAuth;
