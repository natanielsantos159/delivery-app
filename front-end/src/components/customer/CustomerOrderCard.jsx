import PropTypes from 'prop-types';
import { Card, CardHeader, CardContent, Typography, Box } from '@mui/material';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import OrderStatusChip from './OrderStatusChip';
import { AuthContext } from '../../contexts/AuthContext';

export default function CustomerOrderCard({ id, status, totalPrice, saleDate }) {
  const navigate = useNavigate();
  const { userInfo: { role } } = useContext(AuthContext);

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
              data-testid={ `${role}_orders__element-order-id-${id}` }
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
            data-testid={ `${role}_orders__element-card-price-${id}` }
          >
            { formatter.format(totalPrice) }
          </Typography>
          <Typography
            variant="h9"
            data-testid={ `${role}_orders__element-order-date-${id}` }
          >
            { new Date(saleDate).toLocaleDateString('pt-BR') }
          </Typography>
        </Box>
        <OrderStatusChip
          sx={ { margin: '10px 0' } }
          status={ status }
          dataTestId={ `${role}_orders__element-delivery-status-${id}` }
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
