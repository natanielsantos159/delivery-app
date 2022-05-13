import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Table,
  Card,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Divider,
  Stack,
  useTheme,
} from '@mui/material';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';
import useCart from '../hooks/useCart';

export default function CheckoutTable({ columns, data }) {
  const { removeItem, totalPrice } = useCart();

  const { palette } = useTheme();

  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
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
    <TableContainer component={ Card } sx={ { boxShadow: 5 } }>
      <Table>
        <TableHead sx={ { background: 'grey' } }>
          <StyledTableRow>
            {columns.map((column) => (
              <StyledTableCell align="center" key={ column }>{ column }</StyledTableCell>
            ))}
          </StyledTableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <StyledTableRow key={ row.id }>
              <StyledTableCell
                data-testid={
                  `customer_checkout__element-order-table-item-number-${index}`
                }
                sx={ { fontWeight: 'bold' } }
                align="center"
              >
                {index + 1}
              </StyledTableCell>
              <StyledTableCell>
                <img src={ row.urlImage } alt={ `${row.name} imagem` } height="50px" />
              </StyledTableCell>
              <StyledTableCell
                data-testid={ `customer_checkout__element-order-table-name-${index}` }
                sx={ { fontWeight: 'bold' } }
                align="center"
              >
                {row.name}
              </StyledTableCell>
              <StyledTableCell
                data-testid={ `customer_checkout__element-order-table-quantity-${index}` }
                sx={ { fontWeight: 'bold' } }
                align="center"
              >
                {row.quantity}
              </StyledTableCell>
              <StyledTableCell
                data-testid={
                  `customer_checkout__element-order-table-unit-price-${index}`
                }
                sx={ { fontWeight: 'bold' } }
                align="center"
              >
                {formatter.format(row.price)}
              </StyledTableCell>
              <StyledTableCell
                data-testid={
                  `customer_checkout__element-order-table-sub-total-${index}`
                }
                sx={ { fontWeight: 'bold' } }
                align="center"
              >
                {formatter.format((row.price * row.quantity))}
              </StyledTableCell>
              <StyledTableCell
                data-testid={ `customer_checkout__element-order-table-remove-${index}` }
                align="center"
              >
                <Button
                  variant="contained"
                  color="error"
                  onClick={ () => removeItem(row.id) }
                >
                  Remover
                </Button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
      <Divider variant="middle" sx={ { mt: 5 } } />
      <Stack alignItems="flex-end" p={ 2 }>
        <Typography
          data-testid="customer_checkout__element-order-total-price"
          width="fit-content"
          fontWeight="bold"
          sx={ {
            p: 2,
            background: palette.success.main,
            borderRadius: 2,
            color: '#fff',
          } }
        >
          {`TOTAL ${formatter.format(totalPrice)}`}
        </Typography>
      </Stack>
    </TableContainer>
  );
}
CheckoutTable.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.string).isRequired,
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.string,
    quantity: PropTypes.number,
  })).isRequired,
};
