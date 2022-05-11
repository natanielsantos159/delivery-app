import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import DoneIcon from '@mui/icons-material/Done';
import AccessTime from '@mui/icons-material/AccessTime';
import LoopIcon from '@mui/icons-material/Loop';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import { Chip } from '@mui/material';
import { AuthContext } from '../../contexts/AuthContext';

export default function OrderStatusChip({ status, sx }) {
  const { userInfo: { role } } = useContext(AuthContext);

  const getStatusStyling = () => {
    switch (status) {
    case 'Entregue':
      return { icon: <DoneIcon />, color: 'success' };
    case 'Pendente':
      return { icon: <AccessTime />, color: 'warning' };
    case 'Preparando':
      return { icon: <LoopIcon />, color: 'primary' };
    case 'Em Trânsito':
      return { icon: <LocalShippingIcon />, color: 'secondary' };
    default: return {};
    }
  };

  return (
    <Chip
      label={
        <span
          data-testid={ `${role}_order_details__element-order-details-label` }
        >
          { status }
        </span>
      }
      sx={ sx }
      { ...getStatusStyling() }
    />
  );
}

OrderStatusChip.propTypes = {
  status: PropTypes.string.isRequired,
  sx: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  ).isRequired,
};
