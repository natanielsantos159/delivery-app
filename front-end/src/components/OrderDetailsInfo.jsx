import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { Box } from '@mui/material';
import CalendarToday from '@mui/icons-material/CalendarToday';
import AssignmentInd from '@mui/icons-material/AssignmentInd';
import Sell from '@mui/icons-material/Sell';
import OrderStatusChip from './customer/OrderStatusChip';
import OrderDetailsChip from './customer/OrderDetailsChip';
import { AuthContext } from '../contexts/AuthContext';

export default function OrderDetailsInfo({ orderInfo }) {
  const { userInfo: { role } } = useContext(AuthContext);
  const { id, seller, saleDate, status } = orderInfo;

  return (
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
        content={ id }
        dataTestId="order-id"
      />
      { role === 'customer' && (<OrderDetailsChip
        label="P. Vend:"
        icon={ <AssignmentInd /> }
        color="secondary"
        content={ seller.name }
        dataTestId="seller-name"
      />) }
      <OrderDetailsChip
        icon={ <CalendarToday /> }
        color="primary"
        content={ new Date(saleDate).toLocaleDateString('pt-BR') }
        dataTestId="order-date"
      />
      <OrderStatusChip
        status={ status }
        sx={ { borderRadius: 1 } }
        dataTestId={
          `${role}_order_details__element-order-details-label-delivery-status`
        }
      />
    </Box>
  );
}

OrderDetailsInfo.propTypes = {
  orderInfo: PropTypes.shape({
    id: PropTypes.number,
    saleDate: PropTypes.string,
    seller: PropTypes.shape({
      name: PropTypes.string,
    }),
    status: PropTypes.string,
  }).isRequired,
};
