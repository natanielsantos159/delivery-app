import PropTypes from 'prop-types';
import React, { createContext, useState } from 'react';

export const CartContext = createContext({});

export const CartProvider = ({ children }) => {
  const [totalPrice, setTotalPrice] = useState(0);

  const getTotalValue = (cart) => {
    if (cart) {
      const total = cart
        .reduce((acc, product) => acc + (product.quantity * product.price), 0);
      setTotalPrice(total.toFixed(2));
    }
  };

  return (
    <CartContext.Provider value={ { totalPrice, getTotalValue } }>
      {children}
    </CartContext.Provider>
  );
};
CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
