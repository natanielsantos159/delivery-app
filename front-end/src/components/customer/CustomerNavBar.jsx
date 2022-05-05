import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Box,
  Button,
} from '@mui/material';
import useAuth from '../../hooks/useAuth';

export default function NavBar() {
  const navigate = useNavigate();
  const { logout, userInfo } = useAuth();

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
            {/* // Necessário o uso do '?' pois o objeto inicia como nulo} // */}
            { userInfo?.name }
          </Button>
          <Button
            sx={ {
              my: 2,
              color: 'white',
              display: 'block',
            } }
            data-testid="customer_products__element-navbar-link-logout"
            onClick={ () => logout() }
          >
            Sair
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
