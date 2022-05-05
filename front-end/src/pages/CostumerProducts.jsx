import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import CustomerCart from '../components/customer/CustomerCartFloatingBtn';
import NavBar from '../components/customer/CustomerNavBar';
import ProductCard from '../components/products/ProductsCard';
import { PRODUCTS } from '../services/user.service';
import useAuth from '../hooks/useAuth';

export default function CostumerProducts() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated]);

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
