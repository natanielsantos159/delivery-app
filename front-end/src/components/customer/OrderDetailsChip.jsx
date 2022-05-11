import { Chip } from '@mui/material';
import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

export default function OrderDetailsChip({ dataTestId, label, content, icon, color }) {
  const { userInfo: { role } } = useContext(AuthContext);

  return (
    <Chip
      label={
        <span>
          { label && `${label} `}
          <span
            data-testid={
              `${role}_order_details__element-order-details-label-${dataTestId}`
            }
          >
            { content }
          </span>
        </span>
      }
      sx={ { borderRadius: 1 } }
      icon={ icon }
      color={ color }
    />
  );
}

OrderDetailsChip.propTypes = {
  color: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  dataTestId: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  label: PropTypes.string,
};

OrderDetailsChip.defaultProps = {
  label: '',
};
