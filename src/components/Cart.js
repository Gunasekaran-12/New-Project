import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Button, Typography, Box } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import './Cart.css';

function CartSummary() {
  const [cart, setCart] = useState({});
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const taxRate = 0.10; // 10% tax rate

  // Fetch cart data from localStorage and products from the backend
  useEffect(() => {
    const fetchCartAndProducts = async () => {
      try {
        const savedCart = localStorage.getItem('cart');
        const parsedCart = savedCart ? JSON.parse(savedCart) : {};
        setCart(parsedCart);

        // Fetch product data (with prices) from the backend
        const productResponse = await axios.get('http://localhost:3000/cart');
        setProducts(productResponse.data);
      } catch (error) {
        console.error('Error fetching cart or products:', error);
        setError('Failed to load cart or product data.');
      }
    };

    fetchCartAndProducts();
  }, []);

  // Create a download link for the cart JSON data
  const downloadCart = () => {
    const cartData = JSON.stringify(cart, null, 2);
    const blob = new Blob([cartData], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'cart.json';
    link.click();
    URL.revokeObjectURL(url); // Clean up the object URL after download
  };

  return (
    <Box className="cart-summary" boxShadow={4} padding={4} borderRadius={2} textAlign="center">
      <Typography variant="h4" component="h2" gutterBottom>
        Cart Summary
      </Typography>

      {error && <Typography color="error">{error}</Typography>}

      {/* Link to download the cart JSON file */}
      <Button 
        variant="contained" 
        color="secondary" 
        onClick={downloadCart} 
        sx={{ mb: 2 }} 
        startIcon={<DownloadIcon />}
      >
        Download Cart JSON
      </Button>

      {/* Button to view the amounts in the Amounts component */}
      <Link to="/amounts" state={{ cart }} style={{ textDecoration: 'none' }}>
        <Button variant="contained" color="primary" startIcon={<VisibilityIcon />}>
          View Total Amount
        </Button>
      </Link>

      <Box mt={3}>
        <Link to="/dashboard" style={{ textDecoration: 'none' }}>
          <Button variant="outlined" color="info" startIcon={<ArrowBackIcon />}>
            Back To Products
          </Button>
        </Link>
      </Box>
    </Box>
  );
}

export default CartSummary;