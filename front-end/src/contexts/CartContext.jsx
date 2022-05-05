import PropTypes from 'prop-types';
import React, { createContext, useEffect, useState } from 'react';

export const CartContext = createContext({});

export const CartProvider = ({ children }) => {
  const [totalPrice, setTotalPrice] = useState(0);

  const getCartFromStorage = () => {
    const cart = localStorage.getItem('cart');
    if (cart) {
      const parsedCart = JSON.parse(cart);
      return parsedCart;
    }
    return null;
  };

  useEffect(() => {
    const cart = getCartFromStorage();

    const getTotalPrice = () => {
      const totalPrices = cart
        .reduce((acc, current) => (
          acc.price * acc.quantity) + (current.price * current.quantity));
      setTotalPrice(totalPrices);
      return totalPrices;
    };
    getTotalPrice();
  }, [cart]);

  return (
    <CartContext.Provider value={ { addProducts, cartProducts, totalPrice } }>
      {children}
    </CartContext.Provider>
  );
};
CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
