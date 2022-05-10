import PropTypes from 'prop-types';
import { Card, Typography, Box, Chip } from '@mui/material';
import React from 'react';
import DoneIcon from '@mui/icons-material/Done';
import PendingIcon from '@mui/icons-material/Pending';
import LoopIcon from '@mui/icons-material/Loop';

export default function OrderCard({ id, status, totalPrice, saleDate }) {
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
        maxWidth: '350px',
        padding: '30px',
        display: 'flex',
        flexDirection: 'inline',
        alignItems: 'center',
      } }
    >
      <Box sx={ { padding: '10px' } }>
        <Typography variant="h7">Pedido</Typography>
        <Typography
          variant="h6"
          datatest-id="customer_orders__element-order-id"
        >
          { id }
        </Typography>
      </Box>
      <Box
        sx={ {
          padding: '10px',
          marginRight: '5px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        } }
      >
        <Typography
          variant="h5"
          datatest-id="customer_orders__element-card-price"
        >
          { formatter.format(totalPrice) }
        </Typography>
        <Typography
          variant="h9"
          datatest-id="customer_orders__element-order-date"
        >
          { new Date(saleDate).toLocaleDateString('pt-BR') }
        </Typography>
        <Chip
          label={ status }
          color="primary"
          datatest-id="customer_orders__element-delivery-status"
          icon={ getStatusIcon() }
        />
      </Box>
    </Card>
  );
}

OrderCard.propTypes = {
  status: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  totalPrice: PropTypes.string.isRequired,
  saleDate: PropTypes.string.isRequired,
};