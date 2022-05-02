import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Typography,
  TextField,
  Button,
  Card,
  Alert,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import LOGIN from '../services/user.service';
import deliveryImage2 from '../assets/delivery-image2.jpg';
import deliveryMan from '../assets/delivery-man.png';
import { validateEmail, validatePassword } from '../helpers/validate';

const RootStyle = styled('div')(() => ({
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

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

  const loginUser = async () => {
    try {
      const response = await LOGIN({ email, password });
      const { token, user } = response.data;
      localStorage.setItem('user', JSON.stringify({ token, user }));
      navigate('/customer/products');
    } catch (err) {
      setErrorMessage(err.response.data.error);
      setError(true);
    }
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
          error={ email.length > 0 && validateEmail(email).error }
          helperText={ email.length > 0
             && validateEmail(email).error && validateEmail(email).message }
          value={ email }
          onChange={ ({ target }) => setEmail(target.value) }
          inputProps={ { 'data-testid': 'common_login__input-email' } }
          label="Digite o seu E-mail"
          sx={ { width: 350, mb: 5 } }
        />
        <TextField
          type="password"
          error={ password.length > 0 && validatePassword(password).error }
          helperText={ password.length > 0
            && validatePassword(password).error && validatePassword(password).message }
          value={ password }
          onChange={ ({ target }) => setPassword(target.value) }
          inputProps={ { 'data-testid': 'common_login__input-password' } }
          label="Digite a sua Senha"
          sx={ { width: 350, mb: 5 } }
        />
        <Button
          type="submit"
          disabled={ validateEmail(email).error || validatePassword(password).error }
          data-testid="common_login__button-login"
          variant="contained"
          sx={ { width: 350, mb: 3 } }
          onClick={ () => loginUser() }
        >
          Entrar
        </Button>
        <Box display="flex" alignItems="center">
          <Typography>Ainda não possui uma conta?</Typography>
          <Button
            sx={ { fontWeight: 'bold' } }
            data-testid="common_login__button-register"
            onClick={ () => navigate('/register') }
          >
            Cadastrar
          </Button>
        </Box>
        { error && (
          <Alert
            severity="error"
            data-testid="common_login__element-invalid-email"
          >
            { errorMessage }
          </Alert>) }
      </Card>
    </RootStyle>
  );
}
