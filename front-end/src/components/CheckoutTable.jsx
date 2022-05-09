import React from 'react';
import PropTypes from 'prop-types';
import { Button,
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

export default function CheckoutTable({ columns, data, onClick }) {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell key={ column }>{ column }</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={ row.id }>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.quantity}</TableCell>
              <TableCell>{row.price}</TableCell>
              <TableCell>{row.price * row.quantity}</TableCell>
              <TableCell>
                <Button onClick={ onClick }>
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
