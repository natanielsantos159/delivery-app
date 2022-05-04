import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import OrderCard from '../components/OrderCard';
import GET_SALES_BY_USER_ID from '../services/sales.service';

export default function CustomerOrders() {
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    const userId = 3;
    const { data } = await GET_SALES_BY_USER_ID(userId);
    setOrders(data);
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <Box
      sx={ {
        backgroundColor: 'white',
        display: 'flex',
        justifyContent: 'space-around',
      } }
    >
      { orders.map((order, i) => <OrderCard { ...order } key={ i } />) }
    </Box>
  );
}
