import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { Card, Typography, Box, CardHeader, CardContent } from '@mui/material';
import React, { useContext } from 'react';
import OrderStatusChip from '../customer/OrderStatusChip';
import { AuthContext } from '../../contexts/AuthContext';

export default function SellerOrderCard({
  id,
  status,
  totalPrice,
  saleDate,
  deliveryAddress,
  deliveryNumber,
}) {
  const navigate = useNavigate();

  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  const { userInfo: { role } } = useContext(AuthContext);

  return (
    <Card
      sx={ {
        minWidth: '200px',
        cursor: 'pointer',
        boxShadow: 6,
        borderRadius: 2 } }
      onClick={ () => navigate(`/seller/orders/${id}`) }
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
        <Typography
          sx={ { margin: '5px' } }
          dataTestId={ `${role}_orders__element-card-address-${id}` }
        >
          { `${deliveryAddress}, ${deliveryNumber}`}
        </Typography>
      </CardContent>
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
