import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Fab,
} from '@mui/material';
import useCart from '../../hooks/useCart';

export default function CustomerCart() {
  const { totalPrice } = useCart();
  const navigate = useNavigate();

  return (
    <Fab
      variant="extended"
      onClick={ () => navigate('/customer/checkout') }
      sx={ {
        position: 'fixed',
        bottom: 16,
        right: 16,
        color: 'white',
      } }
      color="primary"
      data-testid="customer_products__checkout-bottom-value"
    >
      {totalPrice}
    </Fab>
  );
}
