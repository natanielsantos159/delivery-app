import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Box,
  Button,
} from '@mui/material';

export default function NavBar() {
  const navigate = useNavigate();

  const { name } = JSON.parse(localStorage.getItem('user'));

  return (
    <AppBar position="static" sx={ { height: '4rem', marginBottom: '2rem' } }>
      <Toolbar
        variant="dense"
        sx={ { display: 'flex', justifyContent: 'space-between' } }
      >
        <Box sx={ { display: 'flex', flexDirection: 'inline' } }>
          <Button
            sx={ { my: 2, color: 'white', display: 'block' } }
            data-testid="customer_products__element-navbar-link-products"
            onClick={ () => navigate('/customer/products') }
          >
            Produtos
          </Button>
          <Button
            sx={ { my: 2, color: 'white', display: 'block' } }
            data-testid="customer_products__element-navbar-link-orders"
            onClick={ () => navigate('/customer/orders') }
          >
            Meus Pedidos
          </Button>
        </Box>
        <Box sx={ { display: 'flex', flexDirection: 'inline' } }>
          <Button
            sx={ {
              my: 2,
              color: 'white',
              display: 'block',
              cursor: 'inherit',
              textTransform: 'none',
            } }
            data-testid="customer_products__element-navbar-user-full-name"
          >
            { name }
          </Button>
          <Button
            sx={ {
              my: 2,
              color: 'white',
              display: 'block',
            } }
            data-testid="customer_products__element-navbar-link-logout"
            onClick={ () => navigate('/login') }
          >
            Sair
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
