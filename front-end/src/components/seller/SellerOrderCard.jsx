import PropTypes from 'prop-types';
import { Card, Typography, Box, Chip } from '@mui/material';
import React from 'react';
import DoneIcon from '@mui/icons-material/Done';
import PendingIcon from '@mui/icons-material/Pending';
import LoopIcon from '@mui/icons-material/Loop';

export default function SellerOrderCard({
  id,
  status,
  totalPrice,
  saleDate,
  deliveryAddress,
  deliveryNumber,
}) {
  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  const getStatusIcon = () => {
    switch (status) {
    case 'entregue':
      return <DoneIcon />;
    case 'pendente':
      return <PendingIcon />;
    case 'preparando':
      return <LoopIcon />;
    default: return null;
    }
  };

  return (
    <Card
      sx={ {
        maxWidth: '500px',
        display: 'flex',
        flexDirection: 'inline',
        alignItems: 'center',
        height: 'auto',
      } }
    >
      <Box sx={ { padding: '0px 30px 0px 30px' } }>
        <Typography variant="h7">Pedido</Typography>
        <Typography
          variant="h6"
          datatest-id={ `seller_orders__element-order-id-${id}` }
        >
          { id }
        </Typography>
      </Box>
      <Box
        sx={ {
          padding: '10px 30px 10px 30px',
          height: 'auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          backgroundColor: '#B9D9EB',
        } }
      >
        <Typography
          variant="h5"
          datatest-id={ `seller_orders__element-card-price-${id}` }
          sx={ { margin: '5px' } }
        >
          { formatter.format(totalPrice) }
        </Typography>
        <Typography
          variant="h9"
          datatest-id={ `seller_orders__element-order-date-${id}` }
          sx={ { margin: '5px' } }
        >
          { new Date(saleDate).toLocaleDateString('pt-BR') }
        </Typography>
        <Chip
          label={ status }
          color="primary"
          datatest-id={ `seller_orders__element-delivery-status-${id}` }
          icon={ getStatusIcon() }
          sx={ { margin: '5px' } }
        />
        <Typography sx={ { margin: '5px' } }>
          { `${deliveryAddress}, ${deliveryNumber}`}
        </Typography>
      </Box>
    </Card>
  );
}

SellerOrderCard.propTypes = {
  status: PropTypes.string,
  id: PropTypes.number,
  totalPrice: PropTypes.string,
  saleDate: PropTypes.string,
  deliveryAddress: PropTypes.string,
  deliveryNumber: PropTypes.string,
}.isRequired;
