import PropTypes from 'prop-types';
import React, { createContext, useState } from 'react';

export const CartContext = createContext({});

export const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);

  const addProducts = (productItem) => {
    setCartProducts((prevProducts) => ({
      ...prevProducts,
      productItem,
    }));
  };

  const getTotalPrice = () => {
    const totalPrice = cartProducts.reduce((acc, current) => acc.price + current.price);
    return totalPrice;
  };

  return (
    <CartContext.Provider value={ { addProducts, cartProducts, getTotalPrice } }>
      {children}
    </CartContext.Provider>
  );
};
CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
