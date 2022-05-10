import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Box,
  Button,
} from '@mui/material';
import useAuth from '../../hooks/useAuth';
import useToastManager from '../../hooks/useToast';

export default function SellerNavBar() {
  const navigate = useNavigate();
  const { enqueueToast } = useToastManager();
  const { logout, userInfo } = useAuth();

  const endSession = () => {
    logout();
    enqueueToast('success', 'Sessão encerrada com sucesso!', 'success');
  };

  return (
    <AppBar position="static" sx={ { height: '4rem', marginBottom: '2rem' } }>
      <Toolbar
        variant="dense"
        sx={ { display: 'flex', justifyContent: 'space-between' } }
      >
        <Box sx={ { display: 'flex', flexDirection: 'inline' } }>
          <Button
            sx={ { my: 2, color: 'white', display: 'block' } }
            data-testid="customer_products__element-navbar-link-orders"
            onClick={ () => navigate('/seller/orders') }
          >
            { userInfo?.role === 'seller' ? 'PEDIDOS' : 'GERENCIAR USUÁRIOS' }
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
            onClick={ () => endSession() }
          >
            Sair
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
