import {
  Typography,
  Box,
  Paper,
  TableContainer,
  Button,
} from '@mui/material';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CalendarToday from '@mui/icons-material/CalendarToday';
import AssignmentInd from '@mui/icons-material/AssignmentInd';
import Sell from '@mui/icons-material/Sell';
import OrderDetailsTable from '../components/customer/OrderDetailsTable';
import OrderStatusChip from '../components/customer/OrderStatusChip';
import OrderDetailsChip from '../components/customer/OrderDetailsChip';
import GET_ORDER_INFO from '../services/sale.service';

const TEST_ID = 'customer_order_details__element-order-details-label-delivery-status';
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
          <OrderDetailsChip
            label="PEDIDO"
            icon={ <Sell /> }
            color="success"
            content={ orderInfo.id }
            dataTestId="order-id"
          />
          <OrderDetailsChip
            label="P. Vend:"
            icon={ <AssignmentInd /> }
            color="secondary"
            content={ orderInfo.seller.name }
            dataTestId="seller-name"
          />
          <OrderDetailsChip
            icon={ <CalendarToday /> }
            color="primary"
            content={ new Date(orderInfo.saleDate.split('-')).toLocaleDateString() }
            dataTestId="order-date"
          />
          <OrderStatusChip
            status={ orderInfo.status }
            sx={ { borderRadius: 1 } }
            dataTestId={ TEST_ID }
          />
        </Box>
        <Button
          variant="contained"
          sx={ { height: 'min-content' } }
          data-testid="customer_order_details__button-delivery-check"
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
