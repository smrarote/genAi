import React, { useState, useEffect } from 'react';
import CartService from '../cart/CartService';
import { useNavigate } from 'react-router-dom'

const Orders = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const items = await CartService.getCartItems();
        setCartItems(items);
      } catch (error) {
        console.error('Error fetching cart items:', error);
      }
    };

    fetchCartItems();
  }, []);
 
    const navigate = useNavigate();
    const Home = async () => {
        navigate('/navbar');
    };

  const calculateTotalAmount = () => {
    return cartItems.reduce((total, item) => total + parseFloat(item.productPrice), 0).toFixed(2);
  };

  return (
    <div>
      <h2>Order Summary</h2>
      <div>
        <h3>Order Details:</h3>
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              <h4>{item.productName}</h4>
              <p>Price: {item.productPrice}</p>
              <p>Category: {item.productCategory}</p>
              <img src={item.productImage} alt={item.productName} style={{ maxWidth: '200px' }} />
              <p>Description: {item.productDescription}</p>
            </li>
          ))}
        </ul>
      </div>
      <p>Total Amount: ${calculateTotalAmount()}</p>
      <button onClick={Home}>Go To Home</button>
    </div>
  );
};

export default Orders;
