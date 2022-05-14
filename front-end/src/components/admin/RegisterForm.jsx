import React, { useEffect, useState } from 'react';
import { Card, Stack, TextField, Typography } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { validateName, validateEmail, validatePassword } from '../../helpers/validate';
import USERS from '../../services/admin.service';

export default function RegisterForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    role: '',
  });
  const [roles, setRoles] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const arrRoles = [];
        const response = await USERS();
        response.data.forEach((user) => {
          arrRoles.push(user.role);
        });
        setRoles(arrRoles);
      } catch (error) {
        console.log(error.message);
      }
    };
    getUsers();
  }, []);
  return (
    <Card sx={ { p: 5, boxShadow: 5 } }>
      <Stack spacing={ 2 }>
        <Typography textAlign="center" variant="h4">Cadastrar novo usuário</Typography>
        <TextField
          inputProps={ { 'data-testid': 'admin_manage__input-name' } }
          error={ form.name.length > 0 && validateName(form.name).error }
          helperText={ form.name.length > 0
            && validateName(form.name).error && validateName(form.name).message }
          value={ form.name }
          onChange={ ({ target }) => setForm({ ...form, name: target.value }) }
          label="Nome"
        />
        <TextField
          inputProps={ { 'data-testid': 'admin_manage__input-email' } }
          error={ form.email.length > 0 && validateEmail(form.email).error }
          helperText={ form.email.length > 0
            && validateEmail(form.email).error && validateEmail(form.email).message }
          value={ form.email }
          onChange={ ({ target }) => setForm({ ...form, email: target.value }) }
          label="Email"
        />
        <TextField
          inputProps={ { 'data-testid': 'admin_manage__input-password' } }
          type="password"
          value={ form.password }
          error={ form.password.length > 0 && validatePassword(form.password).error }
          helperText={ form.password.length > 0
            && validatePassword(form.password).error
             && validatePassword(form.password).message }
          onChange={ ({ target }) => setForm({ ...form, password: target.value }) }
          label="Senha"
        />
        <TextField
          SelectProps={ { native: true } }
          inputProps={ { 'data-testid': 'admin_manage__select-role' } }
          onChange={ ({ target }) => setForm({ ...form, role: target.value }) }
          select
          label="Tipo"
        >
          {roles.map((role) => (
            <option value={ role } key={ role }>{role}</option>
          ))}
        </TextField>
        <LoadingButton
          data-testid="admin_manage__button-register"
          disabled={ validateName(form.name).error
            || validateEmail(form.email).error
            || validatePassword(form.password).error
            || form.role === '' }
          variant="contained"
        >
          Cadastrar
        </LoadingButton>
      </Stack>
    </Card>
  );
}
