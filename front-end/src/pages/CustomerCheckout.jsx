import { Container } from '@mui/material';
import React from 'react';
import CheckoutTable from '../components/CheckoutTable';

export default function CustomerCheckout() {
  const storedCart = JSON.parse(localStorage.getItem('cart'));

  const COLUMNS = [
    'item',
    'Descrição',
    'Quantidade',
    'Preço Unitário',
    'Sub-total',
    'Remover',
  ];

  return (
    <Container>
      <CheckoutTable columns={ COLUMNS } data={ storedCart } />
    </Container>
  );
}
