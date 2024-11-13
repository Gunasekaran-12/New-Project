import React, { createContext, useContext, useState } from 'react';

// Create CartContext
const CartContext = createContext();

// Custom hook to use the CartContext
export const useCart = () => {
  return useContext(CartContext);
};

// CartProvider component that wraps the app
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Add product to cart
  const addToCart=(product) => {
    const existingProduct = cart.find(item => item.id ===product.id);
   if(existingProduct){
    setCart(cart.map(item=>item.id === product.id ?{ ...item,quantity : item.quantity+1}:item
    ));
   }else{
    setCart([...cart,{ ...product,quantity:1 }]);
   }
  };

  // Remove product from cart
  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  // Clear all items from the cart
  const clearCart = () => {
    setCart([]);
  };

  // Calculate total quantity of all items in the cart
  const getTotalQuantity = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  // Calculate total amount of the cart
  const getTotalAmount = () => {
    return cart.reduce((total, item) => total + item.quantity * item.rate, 0);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, getTotalQuantity, getTotalAmount }}>
      {children}
    </CartContext.Provider>
  );
};
