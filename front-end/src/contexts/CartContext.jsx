import PropTypes from 'prop-types';
import React, { createContext, useEffect, useState } from 'react';

export const CartContext = createContext({});

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const getStoredCart = () => {
    const cart = localStorage.getItem('cart');
    if (cart) {
      const parsedCart = JSON.parse(cart);
      return parsedCart;
    }
    return null;
  };

  const removeItem = (id) => {
    const cart = getStoredCart();

    const filterCart = cart.filter((cartItem) => cartItem.id !== id);
    localStorage.setItem('cart', JSON.stringify(filterCart));
    setCartItems(filterCart);
  };

  useEffect(() => {
    const cart = getStoredCart();

    setCartItems(cart);
  }, []);

  useEffect(() => {
    const getTotalValue = () => {
      if (cartItems) {
        const total = cartItems
          .reduce((acc, product) => acc + (product.quantity * product.price), 0);
        setTotalPrice(total.toFixed(2));
      }
    };
    getTotalValue();
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={
        { totalPrice, setCartItems, cartItems, removeItem }
      }
    >
      {children}
    </CartContext.Provider>
  );
};
CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
