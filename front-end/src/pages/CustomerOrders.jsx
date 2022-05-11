import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import CustomerOrderCard from '../components/customer/CustomerOrderCard';
import { GET_USER_ORDERS } from '../services/sale.service';
import useToast from '../hooks/useToast';

export default function CustomerOrders() {
  const [orders, setOrders] = useState([]);
  const { enqueueToast } = useToast();

  const fetchOrders = async () => {
    try {
      const { data } = await GET_USER_ORDERS();
      setOrders(data);
    } catch (err) {
      console.log(err.message);
      enqueueToast('error', 'Erro ao listar pedidos', 'error');
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <Box
      sx={ {
        backgroundColor: 'white',
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        rowGap: '40px',
        columnGap: '50px',
      } }
    >
      { orders.map((order, i) => <CustomerOrderCard { ...order } key={ i } />) }
    </Box>
  );
}
