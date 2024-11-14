// src/components/CartButton.js

import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Badge } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const CartButton = ({ cart }) => {
  const itemCount = Object.values(cart).reduce((acc, count) => acc + count, 0); // Calculate total items in cart

  return (
    <Link to="/cart-summary" style={{ textDecoration: 'none' }}>
      <Button variant="outlined" color="secondary" startIcon={<ShoppingCartIcon />}>
        <Badge badgeContent={itemCount} color="error">
          Cart
        </Badge>
      </Button>
    </Link>
  );
};

export default CartButton;