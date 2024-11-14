import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Cart.css';

function CartSummary() {
  const location = useLocation();
  const { cart } = location.state || { cart: {} };

  const taxRate = 0.10; // 10% tax rate

  // Prices of the products (ideally, these should come from a shared data source)
  const prices = {
    'Biscuits': 2.50,
    'Drinks': 1.75,
    'Packaged Foods': 3.00,
    'Apples': 1.00,
    'Bananas': 0.50,
    'Carrots': 0.75,
    'Rice': 4.00,
    'Oil': 3.50,
    'Salt': 0.25,
    'Milk': 1.20,
    'Bread': 2.00,
    'Cheese': 2.50,
    'Shampoo': 3.00,
    'Soap': 1.00,
    'Toothpaste': 1.50
  };

  // Calculate the subtotal
  const subtotal = Object.keys(cart).reduce((acc, productName) => {
    return acc + (prices[productName] * cart[productName]);
  }, 0);

  // Calculate the tax amount
  const taxAmount = subtotal * taxRate;

  // Calculate the final total
  const total = subtotal + taxAmount;

  // Calculate the total number of items
  const totalItems = Object.values(cart).reduce((acc, quantity) => acc + quantity, 0);

  return (
    <section className="cart-summary">
      <h2>Cart Summary</h2>
      <p>Total Items: {totalItems}</p> {/* Display the total number of items */}
      <ul>
        {Object.keys(cart).length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          Object.keys(cart).map((productName, index) => (
            <li key={index}>
              <span className="product-name">{productName}</span>: {cart[productName]} x <span className="product-price">${prices[productName].toFixed(2)}</span> = <span className="product-total">${(prices[productName] * cart[productName]).toFixed(2)}</span>
            </li>
          ))
        )}
      </ul>
      <div className="totals">
        <p>Subtotal: <span className="subtotal">${subtotal.toFixed(2)}</span></p>
        <p>Tax (10%): <span className="tax">${taxAmount.toFixed(2)}</span></p>
        <p>Total: <span className="total">${total.toFixed(2)}</span></p>
      </div>
      <Link to="/">Back to Products</Link>
    </section>
  );
}

export default CartSummary;