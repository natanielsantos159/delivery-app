import PropTypes from 'prop-types';
import { Card, CardHeader, CardContent, Typography, Box } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import OrderStatusChip from './OrderStatusChip';

export default function OrderCard({ id, status, totalPrice, saleDate }) {
  const navigate = useNavigate();
  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'decimal',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    <Card
      sx={ {
        minWidth: '200px',
        cursor: 'pointer',
        boxShadow: 6,
        borderRadius: 2 } }
      onClick={ () => navigate(`${id}`) }
    >
      <CardHeader
        title={
          <>
            <Typography variant="p">Pedido </Typography>
            <Typography
              variant="p"
              datatest-id="customer_orders__element-order-id"
            >
              { id }
            </Typography>
          </>
        }
        sx={ {
          backgroundColor: '#1976d2',
          color: 'white',
          display: 'flex',
        } }
      />
      <CardContent>
        <Box>
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
        </Box>
        <OrderStatusChip
          sx={ { margin: '10px 0' } }
          status={ status }
          dataTestId="customer_orders__element-delivery-status"
        />
      </CardContent>
    </Card>
  );
}

OrderCard.propTypes = {
  status: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  totalPrice: PropTypes.string.isRequired,
  saleDate: PropTypes.string.isRequired,
};
