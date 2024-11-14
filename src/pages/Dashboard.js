import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from './ThemeContext'; // Import the custom hook for theme
import { Container, Typography, Button, List, ListItem, ListItemText } from '@mui/material';
import { FaShoppingBasket, FaAppleAlt, FaUtensils, FaBreadSlice, FaSoap } from 'react-icons/fa'; // Importing icons
import './Dashboard.css'; // Ensure this CSS has styles for both light and dark themes

function Dashboard() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Container 
      className={`dashboard-container ${theme}`} 
      sx={{ 
        padding: 4, 
        textAlign: 'center', 
        backgroundColor: theme === 'light' ? '#f5f5f5' : '#424242', // Background color based on theme
        minHeight: '100vh' // Full height for the container
      }}
    >
      <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
        Indian Supermarket
      </Typography>

      <Typography variant="h5" gutterBottom sx={{ fontWeight: '500' }}>
        Explore our product categories:
      </Typography>

      <List sx={{ marginBottom: 4 }}>
        <ListItem button component={Link} to="/products/biscuits-drinks-packaged-foods">
          <FaShoppingBasket className="category-icon" />
          <ListItemText primary={<Typography variant="h6">Biscuits, Drinks & Packaged Foods</Typography>} />
        </ListItem>
        <ListItem button component={Link} to="/products/fruits-vegetables">
          <FaAppleAlt className="category-icon" />
          <ListItemText primary={<Typography variant="h6">Fruits & Vegetables</Typography>} />
        </ListItem>
        <ListItem button component={Link} to="/products/cooking-essentials">
          <FaUtensils className="category-icon" />
          <ListItemText primary={<Typography variant="h6">Cooking Essentials</Typography>} />
        </ListItem>
        <ListItem button component={Link} to="/products/dairy-bakery">
          <FaBreadSlice className="category-icon" />
          <ListItemText primary={<Typography variant="h6">Dairy & Bakery</Typography>} />
        </ListItem>
        <ListItem button component={Link} to="/products/personal-care">
          <FaSoap className="category-icon" />
          <ListItemText primary={<Typography variant="h6">Personal Care</Typography>} />
        </ListItem>
      </List>

      <Button 
        variant="contained" 
        color={theme === 'light' ? 'primary' : 'secondary'} 
        onClick={toggleTheme}
        sx={{ fontSize: '1.2rem', padding: '10px 20px' }} // Increased font size for button
      >
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
      </Button>
    </Container>
  );
}

export default Dashboard;