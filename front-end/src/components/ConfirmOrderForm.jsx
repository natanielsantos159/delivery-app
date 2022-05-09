import React from 'react';
import { Box, Card, MenuItem, TextField } from '@mui/material';
import { LoadingButton } from '@mui/lab';

export default function ConfirmOrderForm() {
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
          inputProps={ { 'data-testid': 'customer_checkout__select-seller' } }
          SelectProps={ { MenuProps:
            { disableScrollLock: true, sx: { maxHeight: 300 } } } }
        >
          <MenuItem>fulana 1</MenuItem>
          <MenuItem>fulana 2</MenuItem>
          <MenuItem>fulana 3</MenuItem>
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
