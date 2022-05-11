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
import { GET_ORDER_INFO } from '../services/sale.service';
import OrderDetailsInfo from '../components/OrderDetailsInfo';

export default function SellerOrderDetails() {
  const { id } = useParams();
  const [orderInfo, setOrderInfo] = useState();

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
          sx={ { height: 'min-content', margin: '0 5px' } }
          data-testid="seller_order_details__button-preparing-check"
          disabled={ orderInfo.status !== 'Pendente' }
        >
          Preparar pedido
        </Button>
        <Button
          variant="contained"
          sx={ { height: 'min-content', margin: '0 5px' } }
          data-testid="seller_order_details__button-dispatch-check"
          disabled={ orderInfo.status !== 'Preparando' }
        >
          Saiu para entrega
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
