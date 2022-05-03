import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Card,
  useTheme,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import toast from 'react-hot-toast';
import { BlockRounded, CheckRounded } from '@mui/icons-material';
import deliveryMan from '../assets/delivery-man.png';
import deliveryImage2 from '../assets/delivery-image2.jpg';
import { validateName, validateEmail, validatePassword } from '../helpers/validate';
import { REGISTER_USER } from '../services/user.service';

const RootStyle = styled('div')(() => ({
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

const CONFLICT_STATUS_CODE = 409;

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { palette } = useTheme();

  const userRegistration = async () => {
    try {
      const response = await REGISTER_USER({ name, email, password });
      const { user } = response.data;
      localStorage.setItem('user', JSON.stringify(user));
      toast('Usuário criado com sucesso!', {
        position: 'top-right',
        icon: <CheckRounded />,
        style: {
          padding: 10,
          background: palette.success.main,
          color: '#fff',
        },
      });
      navigate('/costumer/products')
    } catch (error) {
      console.log(error.message);
      toast(error.response.status === CONFLICT_STATUS_CODE
        ? 'O usuário já existe'
        : 'Erro ao cadastrar usuário', {
        position: 'top-right',
        icon: <BlockRounded />,
        style: {
          padding: 10,
          backgroundColor: palette.error.main,
          color: '#fff',
        },
      });
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
          Cadastro
        </Typography>
        <TextField
          type="text"
          error={ name.length > 0 && validateName(name).error }
          helperText={ name.length > 0
            && validateName(name).error && validateName(name).message }
          value={ name }
          onChange={ ({ target }) => setName(target.value) }
          inputProps={ { 'data-testid': 'common_register__input-name' } }
          label="Digite o seu Nome"
          sx={ { width: 350, mb: 5 } }
        />
        <TextField
          type="text"
          error={ email.length > 0 && validateEmail(email).error }
          helperText={ email.length > 0
            && validateEmail(email).error && validateEmail(email).message }
          value={ email }
          onChange={ ({ target }) => setEmail(target.value) }
          inputProps={ { 'data-testid': 'common_register__input-email' } }
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
          inputProps={ { 'data-testid': 'common_register__input-password' } }
          label="Digite a sua Senha"
          sx={ { width: 350, mb: 5 } }
        />
        <Button
          type="submit"
          onClick={ () => userRegistration() }
          disabled={ validateName(name).error
            || validateEmail(email).error
            || validatePassword(password).error }
          data-testid="common_register__button-register"
          variant="contained"
          sx={ { width: 350, mb: 3 } }
        >
          Cadastrar
        </Button>
      </Card>
    </RootStyle>
  );
}
