import {
  Typography,
  Box,
  Paper,
  TableContainer,
  // Card,
  Chip,
  Button,
} from '@mui/material';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CalendarToday from '@mui/icons-material/CalendarToday';
import AssignmentInd from '@mui/icons-material/AssignmentInd';
import Sell from '@mui/icons-material/Sell';
import OrderDetailsTable from '../components/customer/OrderDetailsTable';
import OrderStatusChip from '../components/customer/OrderStatusChip';
import GET_ORDER_INFO from '../services/sale.service';

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
      <Typography variant="h5" sx={ { margin: '30px 50px' } }>
        Detalhe do pedido
      </Typography>
      <Box sx={ { display: 'flex', margin: 'auto', width: '85vw' } }>
        <Box
          sx={ {
            marginRight: 'auto',
            width: 'auto',
            display: 'flex',
            columnGap: '10px',
            padding: '5px',
          } }
        >
          <Chip
            label={
              <span>
                PEDIDO
                {' '}
                <span>{ orderInfo.id }</span>
              </span>
            }
            sx={ { borderRadius: 1 } }
            icon={ <Sell /> }
            color="success"
          />
          <Chip
            label={
              <span>
                P. Vend:
                {' '}
                <span>{ orderInfo.seller.name }</span>
              </span>
            }
            sx={ { borderRadius: 1 } }
            icon={ <AssignmentInd /> }
            color="secondary"
          />
          <Chip
            label={ new Date(orderInfo.saleDate.split('-')).toLocaleDateString() }
            sx={ { borderRadius: 1 } }
            icon={ <CalendarToday /> }
            color="primary"
          />
          <OrderStatusChip
            status={ orderInfo.status }
            sx={ { borderRadius: 1 } }
          />
        </Box>
        <Button
          variant="contained"
          sx={ { height: 'min-content' } }
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
