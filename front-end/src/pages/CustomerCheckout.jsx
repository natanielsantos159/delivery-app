import { Container } from '@mui/material';
import React from 'react';
import CheckoutTable from '../components/CheckoutTable';
import ConfirmOrderForm from '../components/ConfirmOrderForm';
import useCart from '../hooks/useCart';

export default function CustomerCheckout() {
  const { cartItems } = useCart();

  const COLUMNS = [
    'Item',
    'Imagem',
    'Descrição',
    'Quantidade',
    'Preço Unitário',
    'Sub-total',
    'Remover',
  ];

  return (
    <Container maxWidth="lg" sx={ { p: 2 } }>
      <CheckoutTable columns={ COLUMNS } data={ cartItems } />
      <ConfirmOrderForm />
    </Container>
  );
}
