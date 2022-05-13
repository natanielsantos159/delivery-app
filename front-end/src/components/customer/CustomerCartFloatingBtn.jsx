import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Fab, Typography, Badge,
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import useCart from '../../hooks/useCart';

export default function CustomerCart() {
  const { totalPrice, cartItems } = useCart();
  const navigate = useNavigate();

  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  const getCartTotalQuantity = () => {
    const totalSum = cartItems.reduce((sum, { quantity }) => sum + quantity, 0);
    return totalSum;
  };

  return (
    <Fab
      variant="extended"
      onClick={ () => navigate('/customer/checkout') }
      disabled={ totalPrice <= 0 }
      sx={ {
        position: 'fixed',
        bottom: 16,
        right: 16,
        color: 'white',
        columnGap: '10px',
      } }
      color="primary"
      data-testid="customer_products__button-cart"
    >
      <Badge badgeContent={ getCartTotalQuantity() } color="error">
        <ShoppingCartIcon />
      </Badge>
      <Typography data-testid="customer_products__checkout-bottom-value">
        { formatter.format(totalPrice) }
      </Typography>
    </Fab>
  );
}
