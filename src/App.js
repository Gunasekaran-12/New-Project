import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/login';
import Dashboard from './pages/Dashboard';
import ProductsList from './components/ProductsList';
import Cart from './components/Cart';
import SignUp from './pages/Sign';
import Amounts from './components/Amounts';
import Footer from './components/footer';
import CartButton from './components/CartButton.js'; // Import the CartButton component
import Help from './pages/Help'; // Adjust import path as necessary
import ContactUs from './pages/ContactUs'; // Adjust import path as necessary

function App() {
  const [cart, setCart] = useState({}); // Initialize cart state

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/products/:category" element={<ProductsList cart={cart} setCart={setCart} />} />
          <Route path="/cart-summary" element={<Cart cart={cart} />} />
          <Route path="/amounts" element={<Amounts cart={cart} />} />
          <Route path="/help" element={<Help />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
        <Footer /> {/* Footer is displayed on all pages */}
      </div>
    </Router>
  );
}

export default App;