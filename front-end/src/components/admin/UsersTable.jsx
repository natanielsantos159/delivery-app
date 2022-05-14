import PropTypes from 'prop-types';
import { Button, Table,
  TableBody,
  TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React from 'react';

export default function UsersTable({ users }) {
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
          {users.map((user, index) => (
            <TableRow key={ index }>
              <TableCell
                data-testid={ `admin_manage__element-user-table-item-number-${index}` }
                align="center"
              >
                {index}

              </TableCell>
              <TableCell
                data-testid={ `admin_manage__element-user-table-name-${index}` }
                align="center"
              >
                {user.name}

              </TableCell>
              <TableCell
                data-testid={ `admin_manage__element-user-table-email-${index}` }
                align="center"
              >
                {user.email}

              </TableCell>
              <TableCell
                data-testid={ `admin_manage__element-user-table-role-${index}` }
                align="center"
              >
                { user.role }

              </TableCell>
              <TableCell
                data-testid={ `admin_manage__element-user-table-remove-${index}` }
                align="center"
              >
                <Button>Excluir</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

UsersTable.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    email: PropTypes.string,
    role: PropTypes.string,
  })).isRequired,
};
