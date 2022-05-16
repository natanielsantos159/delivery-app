import React from 'react';
import { Container, Grid } from '@mui/material';
import RegisterForm from '../components/admin/RegisterForm';
import UsersList from '../components/admin/UsersList';

export default function AdminManagement() {
  return (
    <Container>
      <Grid container spacing={ 5 }>
        <Grid item md={ 4 } xs={ 12 }>
          <RegisterForm />
        </Grid>
        <Grid item md={ 8 } xs={ 12 }>
          <UsersList />
        </Grid>
      </Grid>
    </Container>
  );
}
