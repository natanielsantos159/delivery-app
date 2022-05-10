import React from 'react';
import PropTypes from 'prop-types';
import DoneIcon from '@mui/icons-material/Done';
import AccessTime from '@mui/icons-material/AccessTime';
import LoopIcon from '@mui/icons-material/Loop';
import { Chip } from '@mui/material';

export default function OrderStatusChip({ status, sx, dataTestId }) {
  const getStatusStyling = () => {
    switch (status) {
    case 'entregue':
      return { icon: <DoneIcon />, color: 'success' };
    case 'pendente':
      return { icon: <AccessTime />, color: 'warning' };
    case 'preparando':
      return { icon: <LoopIcon />, color: 'primary' };
    default: return {};
    }
  };

  return (
    <Chip
      label={ status }
      sx={ sx }
      datatest-id={ dataTestId }
      { ...getStatusStyling() }
    />
  );
}

OrderStatusChip.propTypes = {
  status: PropTypes.string.isRequired,
  sx: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  ).isRequired,
  dataTestId: PropTypes.string.isRequired,
};
