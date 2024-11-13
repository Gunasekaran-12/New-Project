import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Inventory from './components/Inventory';
import CartSummaryPage from './components/CartSummaryPage'; // Ensure this import path is correct
import AboutUs from './components/AboutUs'; // Import About Us component
import ContactUs from './components/ContactUs'; // Import Contact Us component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/inventory" element={<Inventory/>} />
        <Route path="/cart-summary" element={<CartSummaryPage/>} />
        <Route path="/about-us" element={<AboutUs/>} /> {/* About Us Route */}
        <Route path="/contact-us" element={<ContactUs/>} /> {/* Contact Us Route */}
      </Routes>
    </Router>
  );
}

export default App;