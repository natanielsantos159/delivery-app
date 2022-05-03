import { Box } from '@mui/material';
import React from 'react';
import CustomerCart from '../components/customer/CustomerCartFloatingBtn';
import NavBar from '../components/customer/CustomerNavBar';
import ProductCard from '../components/products/ProductsCard';

export default function CostumerProducts() {
  return (
    <Box>
      <NavBar />
      <Box
        sx={ {
          backgroundColor: 'white',
          display: 'flex',
          justifyContent: 'space-around',
        } }
      >
        {Array.from({ length: 4 }).map((_item, index) => <ProductCard key={ index } />) }
      </Box>
      <CustomerCart />
    </Box>
  );
}
