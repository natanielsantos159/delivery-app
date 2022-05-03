import React, { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  Card,
  CardMedia,
  TextField,
} from '@mui/material';

import deliveryImage2 from '../../assets/delivery-image2.jpg';

export default function ProductCard() {
  const [quantity, setQuantity] = useState(0);

  const handleMinQuantity = () => {
    setQuantity(quantity === 0 ? 0 : quantity - 1);
  };

  return (
    <Card sx={ { maxWidth: 220, borderRadius: 0 } }>
      <Box>
        <Typography
          variant="subtitle1"
          component="text"
          data-testid="customer_products__element-card-price-1"
          sx={ {
            fontSize: '1.2rem',
            margin: '4px',
            zIndex: 3,
            position: 'absolute',
            backgroundColor: 'rgba(10, 0, 0, 0.3)',
            borderRadius: '5px',
          } }
        >
          R$ 3,00
        </Typography>
        <CardMedia
          component="img"
          height="190"
          image={ deliveryImage2 }
          alt="Card Image"
          data-testid="customer_products__img-card-bg-image-1"
          sx={ { zIndex: 1 } }
        />
      </Box>
      <Box
        sx={ {
          backgroundColor: '#f0f7ff',
          paddingTop: '0.5rem',
        } }
      >
        <Typography
          variant="subtitle1"
          color="text.primary"
          textAlign="center"
          data-testid="customer_products__element-card-title-1"
        >
          Nome do Produto
        </Typography>
        <Box
          sx={ {
            display: 'inline-flex',
            margin: '10px',
          } }
        >
          <Button
            variant="contained"
            data-testid="customer_products__button-card-rm-item-1"
            sx={ {
              alignSelf: 'center',
            } }
            onClick={ () => handleMinQuantity() }
          >
            -
          </Button>
          <TextField
            id="outlined-read-only-input"
            inputProps={ { 'data-testid': 'customer_products__input-card-quantity-1' } }
            value={ quantity }
            size="small"
          />
          <Button
            variant="contained"
            data-testid="customer_products__button-card-add-item-1"
            sx={ {
              alignSelf: 'center',
            } }
            onClick={ () => setQuantity(quantity + 1) }
          >
            +
          </Button>
        </Box>
      </Box>
    </Card>
  );
}
