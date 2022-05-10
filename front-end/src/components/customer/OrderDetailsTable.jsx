import PropTypes from 'prop-types';
import React from 'react';
import {
  Table,
  TableHead,
  TableRow,
  TableBody,
} from '@mui/material';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';

export default function CustomerOrderTable({ orderInfo }) {
  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'decimal',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const StyledTableCell = styled(TableCell)(() => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: 'blue',
      color: 'white',
      fontWeight: 700,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(() => ({
    '&:nth-of-type(even)': {
      backgroundColor: '#bababa3d',
    },
    '&': {
      borderBottom: '1px solid rgb(215 215 215)',
    },
  }));

  return (
    <Table>
      <TableHead>
        <StyledTableRow>
          <StyledTableCell>Item</StyledTableCell>
          <StyledTableCell>Descrição</StyledTableCell>
          <StyledTableCell>Quantidade</StyledTableCell>
          <StyledTableCell>Valor Unitário</StyledTableCell>
          <StyledTableCell>Sub-total</StyledTableCell>
        </StyledTableRow>
      </TableHead>
      <TableBody>
        { orderInfo.products.map(({ name, price, SaleProduct: { quantity } }, index) => (
          <StyledTableRow key={ index }>
            <StyledTableCell>{ index }</StyledTableCell>
            <StyledTableCell>{ name }</StyledTableCell>
            <StyledTableCell>{ quantity }</StyledTableCell>
            <StyledTableCell>{ formatter.format(price) }</StyledTableCell>
            <StyledTableCell>{ formatter.format(+quantity * +price) }</StyledTableCell>
          </StyledTableRow>))}
      </TableBody>
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
};
