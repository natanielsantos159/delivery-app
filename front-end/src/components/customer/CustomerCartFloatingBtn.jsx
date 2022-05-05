import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Fab, Typography,
} from '@mui/material';
import useCart from '../../hooks/useCart';

export default function CustomerCart() {
  const { totalPrice } = useCart();
  const navigate = useNavigate();

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
      } }
      color="primary"
      data-testid="customer_products__button-cart"
    >
      <Typography data-testid="customer_products__checkout-bottom-value">
        {String(totalPrice).replace('.', ',')}
      </Typography>
    </Fab>
  );
}
