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
          SelectProps={ { MenuProps:
            { disableScrollLock: true, sx: { maxHeight: 300 } } } }
        >
          <MenuItem>fulana 1</MenuItem>
          <MenuItem>fulana 2</MenuItem>
          <MenuItem>fulana 3</MenuItem>
        </TextField>
        <TextField label="Endereço" />
        <TextField label="Número" />
      </Box>
      <LoadingButton variant="contained">
        FINALIZAR PEDIDO
      </LoadingButton>
    </Card>
  );
}
