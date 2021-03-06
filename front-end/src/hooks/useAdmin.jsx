import { useContext } from 'react';
import { AdminContext } from '../contexts/AdminContext';

const useAdmin = () => {
  const context = useContext(AdminContext);
  if (!context) throw new Error('Admin context must be inside Admin provider');
  return context;
};

export default useAdmin;
