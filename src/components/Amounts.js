import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography, Button, Card, Grid } from '@mui/material';

function Amounts({ cart }) {
  const taxRate = 0.10; // 10% tax rate

  const prices = {
    'Biscuits': 2.50,
    'Drinks': 1.75,
    'Packaged Foods': 3.00,
    'Apples': 1.00,
    'Bananas': 0.50,
    'Carrots': 0.75,
    'Rice': 4.00,
    'Oil': 3.50,
    'Salt': 0.25,
    'Milk': 1.20,
    'Bread': 2.00,
    'Cheese': 2.50,
    'Shampoo': 3.00,
    'Soap': 1.00,
    'Toothpaste': 1.50,
  };

  // Calculate subtotal
  const subtotal = Object.keys(cart).reduce((acc, productName) => {
    return acc + (prices[productName] * (cart[productName] || 0));
  }, 0);

  // Calculate tax
  const taxAmount = subtotal * taxRate;

  // Calculate total
  const total = subtotal + taxAmount;

  return (
    <Box sx={{ padding: 4, textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>
        Total Amount Summary
      </Typography>

      {/* Display each item in the cart */}
      <Grid container spacing={2} justifyContent="center">
        {Object.keys(cart).length > 0 ? (
          Object.keys(cart).map((productName) => (
            <Grid item key={productName} xs={12} sm={6} md={4}>
              <Card sx={{ padding: 2 }}>
                <Typography variant="h6">{productName}</Typography>
                <Typography variant="body1">Price: ${prices[productName].toFixed(2)}</Typography>
                <Typography variant="body1">Quantity: {cart[productName]}</Typography>
              </Card>
            </Grid>
          ))
        ) : (
          <Typography variant="body1">Your cart is empty.</Typography>
        )}
      </Grid>

      <Card sx={{ padding: 2, marginTop: 3 }}>
        <Typography variant="h6">Subtotal: ${subtotal.toFixed(2)}</Typography>
        <Typography variant="h6">Tax (10%): ${taxAmount.toFixed(2)}</Typography>
        <Typography variant="h5" fontWeight="bold">Total: ${total.toFixed(2)}</Typography>
      </Card>

      {/* Back to Cart button */}
      <Link to="/dashboard" style={{ textDecoration: 'none' }}>
        <Button variant="outlined" color="primary" sx={{ marginTop: 3 }}>
          Back to Cart
        </Button>
      </Link>
    </Box>
  );
}

export default Amounts;