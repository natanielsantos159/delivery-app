import { Box } from '@mui/material';
import React from 'react';
import OrderCard from '../components/OrderCard';

export default function CustomerOrders() {
  return (
    <Box
      sx={ {
        backgroundColor: 'white',
        display: 'flex',
        justifyContent: 'space-around',
      } }
    >
      <OrderCard status="pendente" />
      <OrderCard status="entregue" />
      <OrderCard status="preparando" />
    </Box>
  );
}
