import {
  Typography,
  Box,
  Paper,
  TableContainer,
} from '@mui/material';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import GET_ORDER_INFO from '../services/sale.service';
import OrderDetailsTable from '../components/customer/OrderDetailsTable';

export default function OrderDetails() {
  const { id } = useParams();
  const [orderInfo, setOrderInfo] = useState();

  const fecthOrderInfo = async () => {
    try {
      const { data } = await GET_ORDER_INFO(id);
      setOrderInfo(data);
      console.log(data);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    fecthOrderInfo();
  }, []);

  if (!orderInfo) return null;
  return (
    <Box>
      <Typography variant="h5">Detalhe do pedido</Typography>
      <TableContainer
        component={ Paper }
        sx={ { boxShadow: 6, borderRadius: 2, margin: '25px', width: '95vw' } }
      >
        <OrderDetailsTable orderInfo={ orderInfo } />
      </TableContainer>
    </Box>
  );
}
