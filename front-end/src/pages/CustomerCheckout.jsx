import { Container } from '@mui/material';
import React from 'react';
import CheckoutTable from '../components/CheckoutTable';
import NavBar from '../components/customer/CustomerNavBar';
import useCart from '../hooks/useCart';

export default function CustomerCheckout() {
  const { cartItems } = useCart();

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
        <CheckoutTable columns={ COLUMNS } data={ cartItems } />
      </Container>
    </>
  );
}
