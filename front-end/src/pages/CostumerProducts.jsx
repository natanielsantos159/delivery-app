import { Box } from '@mui/material';
import React from 'react';
import ProductCard from '../components/products/ProductsCard';

export default function CostumerProducts() {
  return (
    <Box
      sx={ {
        backgroundColor: 'white',
        display: 'flex',
        justifyContent: 'space-around',
      } }
    >
      {Array.from({ length: 4 }).map((_item, index) => <ProductCard key={ index } />) }
    </Box>
  );
}
