import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import CustomerCart from '../components/customer/CustomerCartFloatingBtn';
import NavBar from '../components/customer/CustomerNavBar';
import ProductCard from '../components/products/ProductsCard';
import { PRODUCTS } from '../services/user.service';

export default function CostumerProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const putProductsInState = async () => setProducts(await PRODUCTS());
    putProductsInState();
    console.log(products);
  }, []);

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
        { Array.from({ length: 4 }).map((_item, index) => <ProductCard key={ index } />) }
      </Box>
      <CustomerCart />
    </Box>
  );
}
