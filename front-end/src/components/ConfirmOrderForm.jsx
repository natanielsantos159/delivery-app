import React, { useCallback, useEffect, useState } from 'react';
import { Box, Card, TextField } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { useNavigate } from 'react-router-dom';
import { GET_SELLERS } from '../services/user.service';
import useToastManager from '../hooks/useToast';
import CREATE_ORDER from '../services/sales.service';
import useCart from '../hooks/useCart';

export default function ConfirmOrderForm() {
  const { cartItems, totalPrice } = useCart();
  const navigate = useNavigate();

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

      const { data: { orderId } } = await CREATE_ORDER(body);

      enqueueToast('success', 'Pedido enviado com sucesso!', 'success');

      navigate(`/customer/orders/${orderId}`);
    } catch (error) {
      console.log(error.message);
      enqueueToast('error', 'Não foi possível realizar o pedido', 'error');
    } finally {
      setLoading(false);
    }
  };

  const getSellers = useCallback(async () => {
    try {
      const response = await GET_SELLERS();
      setSellers(response.data);
    } catch (error) {
      console.log(error.message);
      enqueueToast('error', 'Erro ao carregar os vendedores', 'erro');
    }
  }, [enqueueToast]);

  useEffect(() => {
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
          select
          SelectProps={ { native: true } }
          inputProps={ { 'data-testid': 'customer_checkout__select-seller' } }
          value={ selectedSeller }
          onChange={ ({ target }) => setSelectedSeller(target.value) }
        >
          {sellers.map((seller) => (
            <>
              <option
                value={ seller.name }
                key={ seller.id }
              >
                {seller.name}
              </option>
              <option selected disabled value="">
                Escolha um vendedor
              </option>
            </>
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
