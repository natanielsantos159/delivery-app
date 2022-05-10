import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import SellerNavBar from '../components/seller/SellerNavBar';
import useAuth from '../hooks/useAuth';
import { GET_SELLER_ORDERS } from '../services/user.service';
import useToastManager from '../hooks/useToast';
import SellerOrderCard from '../components/seller/SellerOrderCard';

export default function SellerOrdersPage() {
  const [orders, setOrders] = useState([]);

  const { enqueueToast } = useToastManager();

  const { isAuthenticated } = useAuth();

  const navigate = useNavigate();

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

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated]);

  console.log(orders);

  return (
    <Box>
      <SellerNavBar />
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
    </Box>
  );
}
