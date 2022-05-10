import PropTypes from 'prop-types';
import React from 'react';
import {
  Table,
  TableHead,
  TableCell,
  TableRow,
} from '@mui/material';

export default function CustomerOrderTable({ orderInfo }) {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Item</TableCell>
          <TableCell>Descrição</TableCell>
          <TableCell>Quantidade</TableCell>
          <TableCell>Valor Unitário</TableCell>
          <TableCell>Sub-total</TableCell>
        </TableRow>
      </TableHead>
    </Table>
  );
}

CustomerOrderTable.propTypes = {
  orderInfo: PropTypes.shape({
    deliveryAddress: PropTypes.string.isRequired,
    deliveryNumber: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    products: PropTypes.arrayOf(PropTypes.shape({
      SaleProduct: PropTypes.shape({
        saleId: PropTypes.number.isRequired,
        productId: PropTypes.number.isRequired,
        quantity: PropTypes.number.isRequired,
      }),
      name: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
    })).isRequired,
    saleDate: PropTypes.string.isRequired,
    seller: PropTypes.shape({ name: PropTypes.string.isRequired }),
    sellerId: PropTypes.number.isRequired,
    status: PropTypes.string.isRequired,
    totalPrice: PropTypes.string.isRequired,
    userId: PropTypes.number.isRequired,
  }).isRequired,
}
