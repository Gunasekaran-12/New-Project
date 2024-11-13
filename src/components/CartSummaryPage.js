// import React from 'react';
// import { useCart } from './CartContext';
// import './CartSummaryPage.css';
// import logo from '../assets/tom.jpeg'; // Verify this path is correct

// const CartSummaryPage = () => {
//   const { getTotalQuantity, getTotalAmount } = useCart();

//   // Log to check values
//   console.log("Total Quantity:", getTotalQuantity());
//   console.log("Total Amount:", getTotalAmount());

//   if (!getTotalQuantity || !getTotalAmount) {
//     console.error("getTotalQuantity or getTotalAmount function not found in useCart context");
//     return <p>Error loading cart summary. Please try again later.</p>;
//   }

//   return (
//     <div className="cart-summary-page">
//       <h2 className="summary-title">Cart Summary</h2>
//       <div className="summary-details">
//         <p className="summary-item">
//           <span>Total Quantity:</span>
//           <span className="summary-value">{getTotalQuantity()}</span>
//         </p>
//         <p className="summary-item">
//           <span>Total Amount:</span>
//           <span className="summary-value">${getTotalAmount()}</span>
//         </p>
//       </div>
//       <div className="thank-you">
//         <p>Thank you for shopping with us!</p>
//       </div>
//       <img src={logo} alt="Logo" className="cart-summary-image" />
//     </div>
//   );
// };

// export default CartSummaryPage;
import React from 'react';
import { useCart } from './CartContext';
import './CartSummaryPage.css';
import logo from '../assets/tom.jpeg';

const CartSummaryPage = () => {
  const { cart, getTotalQuantity, getTotalAmount } = useCart();

  return (
    <div className="cart-summary-page">
      <h2 className="summary-title">Cart Summary</h2>

      <div className="summary-details">
        {cart.length > 0 ? (
          cart.map(item => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <div className="item-details">
                <h3>{item.name}</h3>
                <p>Rate: ${item.rate}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Total: ${item.quantity * item.rate}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No items in the cart</p>
        )}
      </div>

      <div className="summary-total">
        <p>Total Quantity: {getTotalQuantity()}</p>
        <p>Total Amount: ${getTotalAmount()}</p>
      </div>

      <div className="thank-you">
        <p>Thank you for shopping with us!</p>
      </div>
      <img src={logo} alt="Cart" className="cart-summary-image" />
    </div>
  );
};

export default CartSummaryPage;

