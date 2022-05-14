import React, { useEffect, useState } from 'react';
import { Card, Stack, Typography } from '@mui/material';
import UsersTable from './UsersTable';
import { USERS } from '../../services/admin.service';

export default function UsersList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await USERS();
        console.log(response);
        setUsers(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    getUsers();
  }, []);

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
