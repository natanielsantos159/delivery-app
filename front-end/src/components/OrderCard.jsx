import PropTypes from 'prop-types';
import { Card, Typography, Box, Chip } from '@mui/material';
import React from 'react';
import DoneIcon from '@mui/icons-material/Done';
import PendingIcon from '@mui/icons-material/Pending';
import LoopIcon from '@mui/icons-material/Loop';

export default function OrderCard({ status }) {
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
    <Card sx={ { maxWidth: '300px', padding: '30px' } }>
      <Box>
        <Typography variant="h5">Nome do Produto</Typography>
        <Typography
          variant="h5"
          datatest-id="customer_orders__element-card-price"
        >
          R$35,00
        </Typography>
        <Typography variant="h7">Pedido</Typography>
        <Typography
          variant="h6"
          datatest-id="customer_orders__element-order-id"
        >
          0001
        </Typography>
        <Typography
          variant="h9"
          datatest-id="customer_orders__element-order-date"
        >
          22/02/2022
        </Typography>
      </Box>
      <Chip
        label="Status"
        color="primary"
        datatest-id="customer_orders__element-delivery-status"
        icon={ getStatusIcon() }
      />
    </Card>
  );
}

OrderCard.propTypes = {
  status: PropTypes.string.isRequired,
};
