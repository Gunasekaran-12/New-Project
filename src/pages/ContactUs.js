// ContactUs.js
import React, { useState } from 'react';
import { Typography, Box, TextField, Button, AppBar, Toolbar, Link } from '@mui/material';
import { MdContactMail } from 'react-icons/md';

function ContactUs() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSuccessMessage('');

    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      setError('All fields are required.');
      return;
    }

    // Simulate form submission success
    setSuccessMessage('Your message has been sent successfully!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <>
      {/* Banner at the top of the page */}
      <AppBar position="static" sx={{ backgroundColor: '#4caf50' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Contact Us
          </Typography>
          <Link href="/" color="inherit" sx={{ marginRight: 2 }}>
            Home
          </Link>
        </Toolbar>
      </AppBar>

      <Box sx={{ padding: 4 }}>
        <Typography variant="h4" gutterBottom>Get in Touch</Typography>

        {successMessage && (
          <Typography color="success.main" variant="body1">
            {successMessage}
          </Typography>
        )}

        {error && (
          <Typography color="error.main" variant="body1">
            {error}
          </Typography>
        )}

        {/* Contact Form */}
        <form onSubmit={handleSubmit}>
          <TextField label="Name"
                     name="name"
                     fullWidth value={formData.name}
                     onChange={handleChange}
                     margin='normal'
                     required />

          <TextField label="Email"
                     type='email'
                     name='email'
                     fullWidth value={formData.email}
                     onChange={handleChange}
                     margin='normal'
                     required />

          <TextField label='Message'
                     name='message'
                     fullWidth multiline rows={4}
                     value={formData.message}
                     onChange={handleChange}
                     margin='normal'
                     required />

          {/* Submit Button */}
          <Button type='submit' variant='contained' color='primary'>
            Send Message
          </Button>
        </form>
      </Box>
    </>
  );
}

export default ContactUs;