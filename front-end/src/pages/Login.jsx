import { Container, Box, Typography, Stack, Avatar, Skeleton, TextField, MenuItem, Button, Card } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useState } from 'react';
import deliveryImage from '../assets/delivery-pic.jpg';
import deliveryImage2 from '../assets/delivery-image2.jpg';


const RootStyle = styled('form')(({ theme }) => ({
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}));

export default function Login() {
  const [value, setValue] = useState('default')

  return (
    <RootStyle>
      <Box component={'img'} src={deliveryImage2} width={'65%'} height={'100%'} />
      <Card sx={{
        display: 'flex',
        flex: 1,
        boxShadow: 4,
        alignItems: 'center',
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'center'
      }}
      >
        <Typography
          textAlign={'center'}
          fontWeight={'bold'}
          variant="h3"
          sx={{ mb: 5 }}
        >
          Bem Vindo ao App de Delivery
        </Typography>
        <TextField
          data-testid="common_login__input-email"
          label="Digite o seu E-mail"
          sx={{ width: 400, mb: 5 }}
        />
        <TextField
          data-testid="common_login__input-password"
          label="Digite a sua Senha"
          sx={{ width: 400, mb: 5 }}
        />
        <Button
          data-testid="common_login__button-login"
          variant="contained"
          sx={{ width: 400, mb: 3 }}
        >
          Entrar
        </Button>
        <Box display={'flex'} alignItems={'center'}>
          <Typography>Ainda não possui uma conta?</Typography>
          <Button 
          sx={{ fontWeight: 'bold' }}
          data-testid="common_login__button-register"
          >
            Cadastrar
          </Button>
        </Box>
      </Card>
    </RootStyle>
  )
}