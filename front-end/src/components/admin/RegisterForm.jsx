import React from 'react';
import { Card, Stack, TextField, Typography } from '@mui/material';
import { LoadingButton } from '@mui/lab';

export default function RegisterForm() {
  return (
    <Card sx={ { p: 5, boxShadow: 5 } }>
      <Stack spacing={ 2 }>
        <Typography textAlign="center" variant="h4">Cadastrar novo usuário</Typography>
        <TextField label="Nome" />
        <TextField label="Email" />
        <TextField label="Senha" />
        <TextField label="Tipo" />
        <LoadingButton variant="contained">Cadastrar</LoadingButton>
      </Stack>
    </Card>
  );
}
