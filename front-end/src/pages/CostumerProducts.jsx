import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import CustomerCart from '../components/customer/CustomerCartFloatingBtn';
import NavBar from '../components/customer/CustomerNavBar';
import ProductCard from '../components/products/ProductsCard';
import { PRODUCTS } from '../services/user.service';

export default function CostumerProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const putProductsInState = async () => setProducts(await (await PRODUCTS()).data);
    putProductsInState();
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
        { products
          .map((product, index) => <ProductCard key={ index } item={ product } />) }
      </Box>
      <CustomerCart />
    </Box>
  );
}
