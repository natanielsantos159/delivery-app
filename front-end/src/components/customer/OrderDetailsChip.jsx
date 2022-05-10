import { Chip } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';

export default function OrderDetailsChip({ dataTestId, label, content, icon, color }) {
  return (
    <Chip
      label={
        <span>
          { label && `${label} `}
          <span
            data-testid={
              `customer_order_details__element-order-details-label-${dataTestId}`
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
