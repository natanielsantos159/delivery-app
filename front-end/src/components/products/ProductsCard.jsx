import React, { useEffect, useState } from 'react';
import {
  Box,
  Typography,
  Button,
  Card,
  CardMedia,
  TextField,
} from '@mui/material';

export default function ProductCard(item, index) {
  const [quantity, setQuantity] = useState(0);
  const { item: { id, name, price, urlImage } } = item;

  const handleMinQuantity = () => {
    setQuantity(quantity === 0 ? 0 : quantity - 1);
  };

  useEffect(() => {
    const addToCart = { id, price, quantity };
    const storage = JSON
      .parse(localStorage
        .getItem('cart')).cart ? JSON
        .parse(localStorage.getItem('cart')).cart : { cart: [] };
    if (storage.cart.length === 0) {
      localStorage.setItem('cart', JSON.stringify([addToCart]));
      return;
    }
    const newCart = storage.map((eachProduct) => eachProduct.id !== id);
    localStorage.setItem('cart', JSON.stringify([...newCart, addToCart]));
  }, [quantity]);

  return (
    <Card sx={ { maxWidth: 230, borderRadius: 0, marginBottom: 5 } }>
      <Box>
        <Typography
          variant="subtitle1"
          component="text"
          data-testid={ `customer_products__element-card-price-${index}` }
          sx={ {
            fontSize: '1.2rem',
            margin: '4px',
            zIndex: 3,
            position: 'absolute',
            backgroundColor: 'rgba(10, 0, 0, 0.3)',
            borderRadius: '5px',
          } }
        >
          { `RS ${price}` }
        </Typography>
        <CardMedia
          component="img"
          height="190"
          src={ urlImage }
          alt="Card Image"
          data-testid={ `customer_products__img-card-bg-image-${index}` }
          sx={ { zIndex: 1, objectFit: 'contain' } }
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
          data-testid={ `customer_products__element-card-title-${index}` }
        >
          { name }
        </Typography>
        <Box
          sx={ {
            display: 'inline-flex',
            margin: '10px',
          } }
        >
          <Button
            variant="contained"
            data-testid={ `customer_products__button-card-rm-item-${index}` }
            sx={ {
              alignSelf: 'center',
            } }
            onClick={ () => handleMinQuantity() }
          >
            -
          </Button>
          <TextField
            id="outlined-read-only-input"
            inputProps={ {
              'data-testid': `customer_products__input-card-quantity-${index}`,
            } }
            value={ quantity }
            size="small"
          />
          <Button
            variant="contained"
            data-testid={ `customer_products__button-card-add-item-${index}` }
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
