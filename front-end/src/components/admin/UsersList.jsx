import React from 'react';
import { Card, Stack, Typography } from '@mui/material';
import UsersTable from './UsersTable';

export default function UsersList() {
  return (
    <Card sx={ { p: 5, boxShadow: 5 } }>
      <Stack spacing={ 3 }>
        <Typography textAlign="center" variant="h4">
          Lista de usuários
        </Typography>
        <UsersTable />
      </Stack>
    </Card>
  );
}
