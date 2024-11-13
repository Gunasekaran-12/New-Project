// index.js or App.js
import React from 'react';
import ReactDOM from 'react-dom';
//import RegistrationForm from './RegistrationForm';//
import { CartProvider } from './components/CartContext';
import App from './App';

ReactDOM.render(
  <CartProvider>
    <App/>
  </CartProvider>,
  document.getElementById('root')
);
