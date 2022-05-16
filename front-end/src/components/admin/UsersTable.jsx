import PropTypes from 'prop-types';
import { Button, Table,
  TableBody,
  TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React from 'react';
import { REMOVE_USER } from '../../services/admin.service';
import useToastManager from '../../hooks/useToast';
import useAdmin from '../../hooks/useAdmin';

export default function UsersTable({ users }) {
  const { enqueueToast } = useToastManager();
  const { reloadUserList } = useAdmin();

  const removeUser = async (id) => {
    try {
      await REMOVE_USER(id);
      reloadUserList();
      enqueueToast('success', 'Usuario deletado com sucesso!', 'success');
    } catch (error) {
      console.log(error.message);
      enqueueToast('error', 'Erro ao tentar excluir usuário', 'erro');
    }
  };

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
                align="center"
                data-testid={ `admin_manage__element-user-table-remove-${index}` }
              >
                <Button
                  variant="contained"
                  color="error"
                  onClick={ () => removeUser(user.id) }
                >
                  Excluir

                </Button>
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
