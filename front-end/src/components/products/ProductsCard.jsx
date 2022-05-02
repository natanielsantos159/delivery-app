import React from 'react';
import {
  Box,
  Typography,
  Button,
  Card,
  // CardContent,
  CardMedia,
  CardActions,
  TextField,
} from '@mui/material';

import deliveryImage2 from '../../assets/delivery-image2.jpg';

export default function ProductsCards() {
  return (
    <Card sx={ { maxWidth: 220 } }>
      <Box>
        <Typography
          variant="h5"
          component="text"
        >
          Valor do produto
        </Typography>
        <CardMedia
          component="img"
          height="160"
          image={ deliveryImage2 }
          alt="Card Image"
        />
      </Box>
      <Box
        sx={ {
          backgroundColor: '#f0f7ff',
          paddingTop: '0.5rem',
        } }
      >
        <Typography variant="subtitle1" color="text.primary" textAlign="center">
          Nome do Produto
        </Typography>
        <CardActions>
          <Button size="small">
            -
          </Button>
          <TextField
            id="outlined-read-only-input"
            inputProps={ { 'data-testid': 'customer_products__input-card-quantity-' } }
            value={ 2 }
            size="small"
          />
          <Button size="small">
            +
          </Button>
        </CardActions>
      </Box>
    </Card>
  );
}
