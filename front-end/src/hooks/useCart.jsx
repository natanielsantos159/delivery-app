import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('Cart context must be inside Cart provider');
  return context;
};

export default useCart;
