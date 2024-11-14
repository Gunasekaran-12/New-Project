// Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Typography, Grid, Box, CircularProgress, Link, AppBar, Toolbar } from '@mui/material';
import { FaUserAlt, FaShoppingCart } from 'react-icons/fa'; // Importing icons
import { MdHelpOutline, MdContactMail } from 'react-icons/md'; // Additional icons for Help and Contact

function Login() {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const validateForm = () => {
    const { username, password } = credentials;
    if (!username || !password) {
      setError('Please fill in both fields.');
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!validateForm()) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      if (credentials.username === 'user' && credentials.password === 'pass') {
        navigate('/dashboard');
      } else {
        setError('Invalid username or password.');
      }
    }, 1500);
  };

  const handleSignUp = () => {
    navigate('/signup');
  };

  return (
    <>
      {/* Banner at the top of the page */}
      <AppBar position="static" sx={{ backgroundColor: '#4caf50' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Welcome to Indian Super Market
          </Typography>
          <Link href="/help" color="inherit" sx={{ marginRight: 2 }}>
            <MdHelpOutline style={{ marginRight: '4px' }} /> Help
          </Link>
          <Link href="/contact-us" color="inherit">
            <MdContactMail style={{ marginRight: '4px' }} /> Contact Us
          </Link>
        </Toolbar>
      </AppBar>

      <Grid container justifyContent="center" alignItems="center" sx={{
        minHeight: '100vh',
        padding: { xs: 2, sm: 3 },
        backgroundImage: `url(${require('../pages/rice.jpg')})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}>
        <Grid item xs={12} md={6} lg={4}>
          <Box sx={{
            padding: { xs: 2, sm: 4 },
            backgroundColor: 'rgba(255, 255, 255, 0.85)', // White with slight transparency
            color: '#333',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
            borderRadius: 2,
            backdropFilter: 'blur(10px)',
            maxWidth: '500px',
            margin: 'auto',
            textAlign: 'center',
            border: '1px solid rgba(76, 175, 80, 0.5)', // Light green border
          }}>
            <FaShoppingCart className="icon" size={50} style={{ color: '#4caf50' }} />
            <Typography variant="h4" component="h1" textAlign="center" mb={2} sx={{ fontWeight: 'bold', color: '#333', textTransform: 'uppercase', letterSpacing: '0.1rem' }}>
              Indian Super Market
            </Typography>

            <FaUserAlt className="icon" size={50} style={{ color: '#4caf50' }} />
            <Typography variant="h5" component="h2" textAlign="center" mb={3} sx={{ fontWeight: '600', color: '#555', textTransform: 'capitalize', letterSpacing: '0.05rem' }}>
              Sign In
            </Typography>

            <form onSubmit={handleSubmit}>
              <Box mb={2}>
                <TextField label="Username" variant="outlined" name="username"
                  fullWidth value={credentials.username} onChange={handleChange}
                  error={Boolean(error)} InputProps={{
                    startAdornment:
                      (<FaUserAlt style={{ marginRight: '8px', color: '#4caf50' }} />),
                  }} />
              </Box>
              <Box mb={2}>
                <TextField label="Password" type="password"
                  variant="outlined" name="password"
                  fullWidth value={credentials.password} onChange={handleChange}
                  error={Boolean(error)} InputProps={{
                    startAdornment:
                      (<FaUserAlt style={{ marginRight: '8px', color: '#4caf50' }} />),
                  }} />
              </Box>

              {error && (
                <Typography color="error.main" variant="body2" textAlign="center" mb={2}>
                  {error}
                </Typography>
              )}

              <Button type="submit"
                variant="contained"
                sx={{
                  backgroundColor: '#4caf50',
                  color: '#ffffff',
                  '&:hover': {
                    backgroundColor: '#388e3c',
                  },
                }}
                fullWidth disabled={loading}>
                {loading ? <CircularProgress size={24} color="inherit" /> : 'Login'}
              </Button>
            </form>

            <Box textAlign="center" mt={3}>
              <Typography variant="body2" sx={{ color: '#333' }}>
                Don't have an account?{' '}
                <Link component="button"
                  variant="body2"
                  onClick={handleSignUp}
                  sx={{ color: '#4caf50' }}>
                  Sign Up
                </Link>
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default Login;