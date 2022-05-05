import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import CustomerCart from '../components/customer/CustomerCartFloatingBtn';
import NavBar from '../components/customer/CustomerNavBar';
import ProductCard from '../components/products/ProductsCard';
import { PRODUCTS } from '../services/user.service';
import useToastManager from '../hooks/useToast';

export default function CostumerProducts() {
  const [products, setProducts] = useState([]);
  const { enqueueToast } = useToastManager();

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await PRODUCTS();
        const { data } = response;
        setProducts(data);
      } catch (error) {
        console.log(error.message);
        enqueueToast('error', 'Erro ao listar produtos', 'error');
      }
    };
    getProducts();
  }, []);

  return (
    <Box>
      <NavBar />
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
    </Box>
  );
}