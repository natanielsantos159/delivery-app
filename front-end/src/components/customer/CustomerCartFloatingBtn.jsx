import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Fab,
} from '@mui/material';

export default function CustomerCart() {
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
      Ver Carrinho: R$ 0
    </Fab>
  );
}
