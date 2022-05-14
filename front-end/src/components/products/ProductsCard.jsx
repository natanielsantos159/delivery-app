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
import useCart from '../../hooks/useCart';

export default function ProductCard({ item }) {
  const { id, name, price, urlImage } = item;

  const { setCartItems } = useCart();

  const [quantity, setQuantity] = useState(0);
  const [clicked, setClicked] = useState(false);

  const storageCart = JSON.parse(localStorage.getItem('cart')) || [];

  const handleMinQuantity = () => {
    setQuantity(quantity === 0 ? 0 : quantity - 1);
  };

  useEffect(() => {
    const cartItem = { id, name, price, quantity, urlImage };

    setClicked(true);

    if (quantity) {
      const filterCart = storageCart.filter((product) => product.id !== id);
      setCartItems([...filterCart, cartItem]);
      localStorage.setItem('cart', JSON.stringify([...filterCart, cartItem]));
      return;
    }
    if (quantity === 0 && clicked) {
      const newCart = storageCart.filter((product) => product.id !== id);
      setCartItems(newCart);
      return localStorage.setItem('cart', JSON.stringify(newCart));
    }
  }, [quantity]);

  useEffect(() => {
    if (!storageCart) {
      setQuantity(0);
    }
    const newCart = storageCart.find((eachProduct) => eachProduct.id === id);
    if (newCart) {
      setQuantity(newCart.quantity);
    }
  }, [id]);

  return (
    <Card
      sx={ {
        maxWidth: 230,
        marginBottom: 5,
        boxShadow: 6,
        borderRadius: 2,
      } }
    >
      <Box>
        <Typography
          data-testid={ `customer_products__element-card-price-${id}` }
          sx={ {
            p: 0.5,
            margin: '4px',
            zIndex: 3,
            position: 'absolute',
            backgroundColor: 'rgba(122, 120, 120, 0.3)',
            borderRadius: '5px',
          } }
        >
          {`R$ ${price.toString().replace('.', ',')}`}
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
          fontWeight="bold"
          color="text.primary"
          textAlign="center"
          data-testid={ `customer_products__element-card-title-${id}` }
        >
          {name}
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
            type="number"
            id="outlined-read-only-input"
            inputProps={ {
              'data-testid': `customer_products__input-card-quantity-${id}`,
              style: { textAlign: 'center' },
            } }
            onChange={ ({ target }) => setQuantity(Number(target.value)) }
            value={ quantity }
            size="small"
          />
          <Button
            value={ id }
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
