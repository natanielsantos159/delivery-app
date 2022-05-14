import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import useAuth from '../hooks/useAuth';
import CustomerCart from '../components/customer/CustomerCartFloatingBtn';
import ProductCard from '../components/products/ProductsCard';
import PRODUCTS from '../services/products.service';
import useToastManager from '../hooks/useToast';

export default function CustomerProducts() {
  const [products, setProducts] = useState([]);
  const { enqueueToast } = useToastManager();
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    const getProducts = async () => {
      if (isAuthenticated) {
        try {
          const response = await PRODUCTS();
          const { data } = response;
          setProducts(data);
        } catch (error) {
          console.log(error.message);
          enqueueToast('error', 'Erro ao listar produtos', 'error');
        }
      }
    };
    getProducts();
  }, [isAuthenticated]);

  return (
    <>
      <Box
        sx={ {
          backgroundColor: 'white',
          display: 'flex',
          justifyContent: 'space-around',
          flexWrap: 'wrap',
        } }
      >
        { products
          .map((product, index) => (<ProductCard
            key={ index }
            item={ product }
          />)) }
      </Box>
      <CustomerCart />
    </>
  );
}
