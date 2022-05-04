import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import OrderCard from '../components/OrderCard';
import { GET_USER_ORDERS } from '../services/user.service';
import NavBar from '../components/customer/CustomerNavBar';

export default function CustomerOrders() {
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    const userId = 3;
    const { data } = await GET_USER_ORDERS(userId);
    setOrders(data);
  };

  useEffect(() => {
    fetchOrders();
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
        { orders.map((order, i) => <OrderCard { ...order } key={ i } />) }
      </Box>
    </Box>
  );
}
