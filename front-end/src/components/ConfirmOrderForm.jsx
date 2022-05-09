import React, { useEffect, useState } from 'react';
import { Box, Card, MenuItem, TextField } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { GET_SELLERS } from '../services/user.service';
import useToastManager from '../hooks/useToast';

export default function ConfirmOrderForm() {
  const [sellers, setSellers] = useState([]);
  const [selectedSeller, setSelectedSeller] = useState('');
  const { enqueueToast } = useToastManager();

  useEffect(() => {
    const getSellers = async () => {
      try {
        const response = await GET_SELLERS();
        setSellers(response.data);
      } catch (error) {
        console.log(error.message);
        enqueueToast('error', 'Erro ao carregar os vendedores', 'erro');
      }
    };
    getSellers();
  }, [enqueueToast]);

  return (
    <Card
      sx={ {
        p: 5,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        mt: 5,
        boxShadow: 5 } }
    >
      <Box
        width="100%"
        mb={ 3 }
        display="flex"
        alignItems="center"
        justifyContent="space-evenly"
      >
        <TextField
          label="P.Vendedor Responsável"
          select
          sx={ { width: 200 } }
          value={ selectedSeller }
          onChange={ ({ target }) => setSelectedSeller(target.value) }
          inputProps={ { 'data-testid': 'customer_checkout__select-seller' } }
          SelectProps={ { MenuProps:
            { disableScrollLock: true, sx: { maxHeight: 300 } } } }
        >
          {sellers.map((seller) => (
            <MenuItem value={ seller.id } key={ seller.id }>{seller.name}</MenuItem>
          ))}
        </TextField>
        <TextField
          inputProps={ { 'data-testid': 'customer_checkout__input-address' } }
          label="Endereço"
        />
        <TextField
          inputProps={ { 'data-testid':
        'customer_checkout__input-addressNumber' } }
          label="Número"
        />
      </Box>
      <LoadingButton
        data-testid="customer_checkout__button-submit-order"
        variant="contained"
      >
        FINALIZAR PEDIDO
      </LoadingButton>
    </Card>
  );
}
