import React, { useEffect, useState } from 'react';
import { Box, Card, MenuItem, TextField } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { GET_SELLERS } from '../services/user.service';
import useToastManager from '../hooks/useToast';
import CREATE_ORDER from '../services/sales.service';
import useCart from '../hooks/useCart';

export default function ConfirmOrderForm() {
  const { cartItems, totalPrice } = useCart();

  const [loading, setLoading] = useState(false);
  const [sellers, setSellers] = useState([]);
  const [selectedSeller, setSelectedSeller] = useState('');
  const [address, setAddress] = useState('');
  const [number, setNumber] = useState(null);
  const { enqueueToast } = useToastManager();

  const createNewOrder = async () => {
    setLoading(true);
    try {
      const body = {
        seller: selectedSeller,
        totalPrice,
        deliveryAddress: address,
        deliveryNumber: number,
        products: cartItems,
      };

      await CREATE_ORDER(body);

      enqueueToast('success', 'Pedido enviado com sucesso!', 'success');
    } catch (error) {
      console.log(error.message);
      enqueueToast('error', 'Não foi possível realizar o pedido', 'error');
    } finally {
      setLoading(false);
    }
  };

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
  }, []);

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
            <MenuItem value={ seller.name } key={ seller.id }>{seller.name}</MenuItem>
          ))}
        </TextField>
        <TextField
          value={ address }
          onChange={ ({ target }) => setAddress(target.value) }
          inputProps={ { 'data-testid': 'customer_checkout__input-address' } }
          label="Endereço"
        />
        <TextField
          onChange={ ({ target }) => setNumber(target.value) }
          inputProps={ { 'data-testid':
        'customer_checkout__input-addressNumber' } }
          label="Número"
        />
      </Box>
      <LoadingButton
        loading={ loading }
        onClick={ () => createNewOrder() }
        data-testid="customer_checkout__button-submit-order"
        variant="contained"
      >
        FINALIZAR PEDIDO
      </LoadingButton>
    </Card>
  );
}
