import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductList from './components/ProductsList';
import Amounts from './components/Amounts';
import CartSummary from './components/CartSummary';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import SignUp from './pages/SignUp';

function ShoppingCart() {
  const [cart, setCart] = useState({});

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/products/:category" element={<ProductList cart={cart} setCart={setCart} />} />
        <Route path="/amounts" element={<Amounts cart={cart} />} />
        <Route path="/cart-summary" element={<CartSummary cart={cart} />} />
      </Routes>
    </Router>
  );
}

export default ShoppingCart;