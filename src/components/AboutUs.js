// AboutUs.js
import React from 'react';
import { Link } from 'react-router-dom';
import './AboutUs.css'; // Import your specific styles for About Us

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <h1>About Us</h1>
      <p>Welcome to our medicine store! We are committed to providing high-quality medicines and healthcare products to our customers.</p>
      <p>Grade: A</p>
      <p>World Rank: Top 10</p>
      <Link to="/inventory" className="back-to-inventory-link">Back to Inventory</Link>
    </div>
  );
};

export default AboutUs;
