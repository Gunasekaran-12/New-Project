// ContactUs.js
import React, { useState } from 'react';
import './ContactUs.css'; // Import your specific styles for Contact Us

const ContactUs = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [problem, setProblem] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission logic here
    alert('Your message has been sent!');
    setEmail('');
    setName('');
    setProblem('');
  };

  return (
    <div className="contact-us-container">
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Enter Your Email
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </label>
        <label>
          Name
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
          />
        </label>
        <label>
          Problem
          <textarea 
            value={problem} 
            onChange={(e) => setProblem(e.target.value)} 
            required 
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      <a href="/inventory" className="back-to-inventory-link">Back to Inventory</a>
    </div>
  );
};

export default ContactUs;
