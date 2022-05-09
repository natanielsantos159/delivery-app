import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Table,
  Card,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Divider,
  Stack,
  useTheme,
} from '@mui/material';
import useCart from '../hooks/useCart';

export default function CheckoutTable({ columns, data }) {
  const { removeItem, totalPrice } = useCart();

  const { palette } = useTheme();

  return (
    <TableContainer component={ Card } sx={ { boxShadow: 5 } }>
      <Table>
        <TableHead sx={ { background: 'grey' } }>
          <TableRow>
            {columns.map((column) => (
              <TableCell align="center" key={ column }>{ column }</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={ row.id }>
              <TableCell align="center">{row.id}</TableCell>
              <TableCell align="center">{row.name}</TableCell>
              <TableCell align="center">{row.quantity}</TableCell>
              <TableCell align="center">{row.price}</TableCell>
              <TableCell align="center">
                {(row.price * row.quantity).toFixed(2)}
              </TableCell>
              <TableCell align="center">
                <Button
                  variant="contained"
                  color="error"
                  onClick={ () => removeItem(row.id) }
                >
                  Remover
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Divider variant="middle" sx={ { mt: 5 } } />
      <Stack alignItems="flex-end" p={ 2 }>
        <Typography
          width="fit-content"
          fontWeight="bold"
          sx={ {
            p: 2,
            background: palette.success.main,
            borderRadius: 2,
            color: '#fff',
          } }
        >
          {`TOTAL ${totalPrice}`}
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
