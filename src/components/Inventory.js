import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useCart } from './CartContext'; // Ensure you have this context set up
import './Inventory.css'; // Your CSS file for styling
import axios from 'axios';
import logo from '../assets/G logo.png'; // Your logo image

const Inventory = () => {
  
  
  const [show,setShow]=useState(false);
  const { cart, addToCart } = useCart();
  const navigate = useNavigate();
  const [medicines, setMedicines] = useState([]);
  const [selectedCounts, setSelectedCounts] = useState({}); // Store selected count for each product
  const [initialStocks, setInitialStocks] = useState({}); // Store initial stock values for rollback

  const [newProduct, setNewProduct] = useState({ name: '', rate: '', stock: '', image: '' });

  useEffect(() => {
    axios.get("http://localhost:3000/medicine").then((response) => {
      console.log("API Response Data:", response.data);
      if (Array.isArray(response.data)) {
        setMedicines(response.data);

        // Save the initial stock values to revert when necessary
        const initialStocksObj = response.data.reduce((acc, med) => {
          acc[med.id] = med.stock;
          return acc;
        }, {});
        setInitialStocks(initialStocksObj);
      } else {
        console.error("No valid medicine data found in the response");
      }
    })
    .catch((error) => {
      console.error("Error fetching data:", error.message);
    });
  }, []);

  const handleQuantityChange = (id, delta) => {
    const medicine = medicines.find((med) => med.id === id);
    const selectedCount = selectedCounts[id] || 0;

    if (medicine) {
      const updatedStock = medicine.stock - delta;
      const newSelectedCount = selectedCount + delta;

      // Ensure stock doesn't go negative and selected count doesn't exceed available stock
      if (updatedStock < 0 || newSelectedCount < 0) {
        alert('Cannot select more than available stock or less than zero');
        return;
      }

      // Temporarily update the stock and selected count without affecting the backend
      setMedicines(prevMeds => 
        prevMeds.map(med => med.id === id ? { ...med, stock: updatedStock } : med)
      );
      setSelectedCounts(prev => ({ ...prev, [id]: newSelectedCount }));
    }
  };

  const handleAddToCart = (medicine) => {
    const selectedCount = selectedCounts[medicine.id] || 0;
    if (selectedCount > 0) {
      // Send the final stock update to the backend only when "Add to Cart" is clicked
      axios.put(`http://localhost:3000/medicine/${medicine.id}`, { ...medicine, stock: medicine.stock })
        .then(() => {
          addToCart({ ...medicine, quantity: selectedCount });
          setSelectedCounts(prev => ({ ...prev, [medicine.id]: 0 })); // Reset selected count after adding to cart
        })
        .catch(error => console.error("Error updating stock:", error.message));
    } else {
      alert('Please select a quantity before adding to the cart');
    }
  };

  const handleGoToCartSummary = () => {
    // If Go to Cart Summary is clicked without adding to the cart, revert the stock to its initial values
    setMedicines(prevMeds =>
      prevMeds.map(med => ({ ...med, stock: initialStocks[med.id] }))
    );
    navigate('/cart-summary');
  };

  const handleNewProductChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleAddNewProduct = (e) => {
    e.preventDefault();

    // Validate input fields
    if (newProduct.image.trim() === '') {
      alert('Image URL is required');
      return;
    }
    if (newProduct.stock < 0) {
      alert('Stock value must be non-negative');
      return;
    }

    axios.post("http://localhost:3000/medicine", newProduct)
      .then((response) => {
        setMedicines([...medicines, response.data]);
        setNewProduct({ name: '', rate: '', stock: '', image: '' }); // Reset fields
      })
      .catch(error => console.error("Error adding new product:", error.message));
  };

  const handleDeleteProduct = (id) => {
    axios.delete(`http://localhost:3000/medicine/${id}`)
      .then(() => {
        setMedicines(prevMeds => prevMeds.filter(med => med.id !== id));
      })
      .catch(error => console.error("Error deleting product:", error.message));
  };
  const tog=()=>{
    //setShow(show===true?false:true);
    setShow(!show);
  }
  return (

    <div className="inventory-container">
      <div className="head">
        <img className="img" src={logo} alt='Logo'/>
        Health
      </div>
      <div className="nav-links">
        <Link to="/inventory" className="nav-link1">Home</Link>
        <Link to="/about-us" className="nav-link2">About Us</Link>
        <Link to="/contact-us" className="nav-link3">Contact Us</Link>
        <Link to="/" className="nav-link4">Sign Up</Link>
      </div>
      <div className="carts-section">
        <div className="carts-grid">
          {medicines.length > 0 ? (
            medicines.map(med => (
              <div key={med.id} className="cart">
                <img src={med.image} alt={med.name} />
                <h3>{med.name}</h3>
                <p>Rate: ${med.rate}</p>
                <p>Stock: {med.stock ?? "N/A"}</p>
                <p>Selected: {selectedCounts[med.id] || 0}</p>
                <p>Total: ${selectedCounts[med.id] ? selectedCounts[med.id] * med.rate : 0}</p> {/*  Adding this line */}
                <div className="quantity-controls">
                  <button onClick={() => handleQuantityChange(med.id, -1)} className="quantity-button">-</button>
                  <button onClick={() => handleQuantityChange(med.id, 1)} className="quantity-button" disabled={med.stock === 0}>+</button>
                </div>
                <button onClick={() => handleAddToCart(med)} className="add-to-cart-button">Add to Cart</button>
                <button onClick={() => handleDeleteProduct(med.id)} className="delete-product-button">Delete</button>
              </div>
            ))
          ) : (
            <p>No medicines available</p>
          )}
        </div>
         {/* <h1>Gunasekaran</h1>*/}
        {/* Add new product form */}
         <button className="Add-Medicine" onClick={tog}>
                                {show?"Hide Form":"Add Medicine"}
         </button>
          {show&&(
                 <form onSubmit={handleAddNewProduct} className="add-product-form">
                       <h3>Add New Product</h3>
                       <div>
                         <input type="text" name="name" className="input-box" value={newProduct.name} onChange={handleNewProductChange} placeholder="Product Name" required />
                       </div>
                       <div>
                         <input type="number" name="rate" className="input-box" value={newProduct.rate} onChange={handleNewProductChange} placeholder="Rate" required />
                       </div>
                       <div>
                         <input type="number" name="stock" className="input-box" value={newProduct.stock} onChange={handleNewProductChange} placeholder="Stock" required />
                       </div>
                       <div>
                         <input type="text" name="image" className="input-box" value={newProduct.image} onChange={handleNewProductChange} placeholder="Image URL" required />
                       </div>
                       <button type="submit" className="submit-btn">Add New Product</button>
                     </form>
         )}
      </div>
      <button onClick={handleGoToCartSummary} className="go-to-cart-button">
        Go to Cart Summary
      </button>
    </div>
  );
};

export default Inventory;
