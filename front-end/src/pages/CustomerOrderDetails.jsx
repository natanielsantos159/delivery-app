import {
  Typography,
  Box,
  Paper,
  TableContainer,
  Button,
} from '@mui/material';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import OrderDetailsTable from '../components/customer/OrderDetailsTable';
import { GET_ORDER_INFO, SET_AS_DELIVERED } from '../services/sale.service';
import useToast from '../hooks/useToast';
import OrderDetailsInfo from '../components/OrderDetailsInfo';

export default function CustomerOrderDetails() {
  const { id } = useParams();
  const [orderInfo, setOrderInfo] = useState();
  const { enqueueToast } = useToast();

  const fecthOrderInfo = async () => {
    try {
      const { data } = await GET_ORDER_INFO(id);
      setOrderInfo(data);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    fecthOrderInfo();
  }, []);

  const markAsDelivered = async () => {
    try {
      const { data } = await SET_AS_DELIVERED(orderInfo.id);
      if (data.success) {
        setOrderInfo({ ...orderInfo, status: 'Entregue' });
        enqueueToast('success', 'Pedido marcado como entregue com sucesso.');
      }
    } catch (err) {
      enqueueToast('error', 'Ocorreu um erro.');
      console.log(err.message);
    }
  };

  if (!orderInfo) return null;
  return (
    <Box>
      <Typography variant="h5" sx={ { margin: '30px 50px' } }>
        Detalhe do pedido
      </Typography>
      <Box sx={ { display: 'flex', margin: 'auto', width: '85vw' } }>
        <OrderDetailsInfo orderInfo={ orderInfo } />
        <Button
          variant="contained"
          sx={ { height: 'min-content' } }
          data-testid="customer_order_details__button-delivery-check"
          disabled={ orderInfo.status !== 'Em Trânsito' }
          onClick={ markAsDelivered }
        >
          Marcar como entregue
        </Button>
      </Box>
      <TableContainer
        component={ Paper }
        sx={ {
          boxShadow: 6,
          borderRadius: 2,
          margin: ' 10px auto',
          width: '85vw' } }
      >
        <OrderDetailsTable orderInfo={ orderInfo } />
      </TableContainer>
    </Box>
  );
}
