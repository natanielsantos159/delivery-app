import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Card,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import deliveryImage2 from '../assets/delivery-image2.jpg';
import deliveryMan from '../assets/delivery-man.png';

const RootStyle = styled('form')(() => ({
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

const EMAIL_ERROR_MESSAGE = 'Insira um e-mail válido';
const PASSWORD_ERROR_MESSAGE = 'A senha deve ter mais de 6 caractéres';

const PASSWORD_MINIMUM_LENGTH = 6;

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const validateEmail = () => {
    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const isValidEmail = emailRegex.test(email);
    return {
      error: !isValidEmail,
      message: !isValidEmail && EMAIL_ERROR_MESSAGE };
  };

  const validatePassword = () => {
    const isValidPassword = password.length >= PASSWORD_MINIMUM_LENGTH;
    return {
      error: !isValidPassword,
      message: !isValidPassword && PASSWORD_ERROR_MESSAGE };
  };

  return (
    <RootStyle>
      <Box component="img" src={ deliveryImage2 } width="60%" height="100%" />
      <Card
        sx={ {
          display: 'flex',
          flex: 1,
          boxShadow: 4,
          alignItems: 'center',
          height: '100%',
          flexDirection: 'column',
        } }
      >
        <Box component="img" src={ deliveryMan } width="150px" />
        <Typography
          textAlign="center"
          fontWeight="bold"
          variant="h4"
          sx={ { mb: 5 } }
        >
          Bem Vindo ao App de Delivery
        </Typography>
        <TextField
          type="text"
          error={ email.length > 0 && validateEmail().error }
          helperText={ email.length > 0
             && validateEmail().error && validateEmail().message }
          value={ email }
          onChange={ ({ target }) => setEmail(target.value) }
          inputProps={ { 'data-testid': 'common_login__input-email' } }
          label="Digite o seu E-mail"
          sx={ { width: 350, mb: 5 } }
        />
        <TextField
          type="password"
          error={ password.length > 0 && validatePassword().error }
          helperText={ password.length > 0
            && validatePassword().error && validatePassword().message }
          value={ password }
          onChange={ ({ target }) => setPassword(target.value) }
          inputProps={ { 'data-testid': 'common_login__input-password' } }
          label="Digite a sua Senha"
          sx={ { width: 350, mb: 5 } }
        />
        <Button
          type="submit"
          disabled={ validateEmail().error || validatePassword().error }
          data-testid="common_login__button-login"
          variant="contained"
          sx={ { width: 350, mb: 3 } }
        >
          Entrar
        </Button>
        <Box display="flex" alignItems="center">
          <Typography>Ainda não possui uma conta?</Typography>
          <Button
            sx={ { fontWeight: 'bold' } }
            data-testid="common_login__button-register"
          >
            Cadastrar
          </Button>
        </Box>
      </Card>
    </RootStyle>
  );
}
