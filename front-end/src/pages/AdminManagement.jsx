import React from 'react';
import { Container, Grid } from '@mui/material';
import RegisterForm from '../components/admin/RegisterForm';
import UsersList from '../components/admin/UsersList';

export default function AdminManagement() {
  return (
    <Container>
      <Grid container spacing={ 5 }>
        <Grid item xs={ 4 }>
          <RegisterForm />
        </Grid>
        <Grid item xs={ 8 }>
          <UsersList />
        </Grid>
      </Grid>
    </Container>
  );
}
