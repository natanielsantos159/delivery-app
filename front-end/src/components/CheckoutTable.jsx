import React from 'react';
import PropTypes from 'prop-types';
import { Button,
  Table, Card,
  TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

export default function CheckoutTable({ columns, data, onClick }) {
  return (
    <TableContainer component={ Card } sx={ { boxShadow: 5 } }>
      <Table>
        <TableHead>
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
              <TableCell align="center">{row.price * row.quantity}</TableCell>
              <TableCell align="center">
                <Button variant="contained" color="error" onClick={ onClick }>
                  Remover
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
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
  onClick: PropTypes.func.isRequired,
};
