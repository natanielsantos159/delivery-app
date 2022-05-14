import React, { useEffect, useState } from 'react';
import { Card, Stack, Typography } from '@mui/material';
import UsersTable from './UsersTable';
import { USERS } from '../../services/admin.service';
import useAdmin from '../../hooks/useAdmin';

export default function UsersList() {
  const { reloadUsers, setReloadUsers } = useAdmin();

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await USERS();
        setUsers(response.data);
        setReloadUsers(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    getUsers();
  }, [reloadUsers]);

  return (
    <Card sx={ { p: 5, boxShadow: 5 } }>
      <Stack spacing={ 3 }>
        <Typography textAlign="center" variant="h4">
          Lista de usuários
        </Typography>
        <UsersTable users={ users } />
      </Stack>
    </Card>
  );
}
