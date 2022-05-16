import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import useAuth from '../hooks/useAuth';
import { GET_SELLER_ORDERS } from '../services/sale.service';
import useToastManager from '../hooks/useToast';
import SellerOrderCard from '../components/seller/SellerOrderCard';

export default function SellerOrdersPage() {
  const [orders, setOrders] = useState([]);

  const { enqueueToast } = useToastManager();

  const { isAuthenticated } = useAuth();

  useEffect(() => {
    const getOrders = async () => {
      if (isAuthenticated) {
        try {
          const response = await GET_SELLER_ORDERS();
          const { data } = response;
          setOrders(data.orders);
        } catch (error) {
          console.log(error.message);
          enqueueToast('error', 'Erro ao listar vendas', 'error');
        }
      }
    };
    getOrders();
  }, []);

  return (
    <Box
      sx={ {
        display: 'flex',
        flexDirection: 'inline',
        justifyContent: 'space-evenly',
        height: 'auto',
        minHeight: '1.5rem',
        width: 'auto',
        flexWrap: 'wrap',
      } }
    >
      { orders.map((order, index) => <SellerOrderCard { ...order } key={ index } />) }
    </Box>
  );
}
