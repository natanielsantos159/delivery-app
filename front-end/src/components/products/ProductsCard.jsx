import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Typography,
  Button,
  Card,
  CardMedia,
  TextField,
} from '@mui/material';
import { CartContext } from '../../contexts/CartContext';

export default function ProductCard({ item }) {
  const [quantity, setQuantity] = useState(0);
  const [clicked, setClicked] = useState(false);
  const { id, name, price, urlImage } = item;

  const handleMinQuantity = () => {
    setQuantity(quantity === 0 ? 0 : quantity - 1);
  };

  useEffect(() => {
    const addToCart = { id, name, price, quantity };
    const storageCart = JSON.parse(localStorage.getItem('cart'));
    if (!storageCart) {
      localStorage.setItem('cart', JSON.stringify([]));
      return;
    }
    if (quantity === 0 && clicked) {
      const newCart = storageCart.filter((eachProduct) => eachProduct.id !== id);
      return localStorage.setItem('cart', JSON.stringify(newCart));
    }
    if (quantity) {
      const newCart = storageCart.filter((eachProduct) => eachProduct.id !== id);
      localStorage.setItem('cart', JSON.stringify([...newCart, addToCart]));
    }
    setClicked(true);
  }, [quantity]);

  useEffect(() => {
    const storageCart = JSON.parse(localStorage.getItem('cart'));
    if (!storageCart) {
      setQuantity(0);
    }
    const newCart = storageCart.find((eachProduct) => eachProduct.id === id);
    if (newCart) {
      setQuantity(newCart.quantity);
    }
  }, []);

  return (
    <Card sx={ { maxWidth: 230, borderRadius: 0, marginBottom: 5 } }>
      <Box>
        <Typography
          variant="subtitle1"
          component="text"
          data-testid={ `customer_products__element-card-price-${id}` }
          sx={ {
            fontSize: '1.2rem',
            margin: '4px',
            zIndex: 3,
            position: 'absolute',
            backgroundColor: 'rgba(10, 0, 0, 0.3)',
            borderRadius: '5px',
          } }
        >
          { price.toString().replace('.', ',') }
        </Typography>
        <CardMedia
          component="img"
          height="190"
          src={ urlImage }
          alt="Card Image"
          data-testid={ `customer_products__img-card-bg-image-${id}` }
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
          data-testid={ `customer_products__element-card-title-${id}` }
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
            data-testid={ `customer_products__button-card-rm-item-${id}` }
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
              'data-testid': `customer_products__input-card-quantity-${id}`,
            } }
            value={ quantity }
            size="small"
          />
          <Button
            variant="contained"
            data-testid={ `customer_products__button-card-add-item-${id}` }
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

ProductCard.propTypes = {
  item: {
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.number,
    urlImage: PropTypes.string,
  },
}.isRequired;
