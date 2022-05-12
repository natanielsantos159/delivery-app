import { Button, Table,
  TableBody,
  TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React from 'react';

export default function UsersTable() {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="center">Id</TableCell>
            <TableCell align="center">Nome</TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="center">Tipo</TableCell>
            <TableCell align="center">Excluir</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Array.from({ length: 4 }).map((_item, index) => (
            <TableRow key={ index }>
              <TableCell align="center">1</TableCell>
              <TableCell align="center">Gustavo Inácio</TableCell>
              <TableCell align="center">gus@hotmail.com</TableCell>
              <TableCell align="center">Vendedor</TableCell>
              <TableCell align="center"><Button>Excluir</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
