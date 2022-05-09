import { Container } from '@mui/material';
import React from 'react';
import CheckoutTable from '../components/CheckoutTable';
import NavBar from '../components/customer/CustomerNavBar';

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
    <>
      <NavBar />
      <Container>
        <CheckoutTable columns={ COLUMNS } data={ storedCart } />
      </Container>
    </>
  );
}
