import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CartService from '../cart/CartService';
import CheckoutService from './CheckoutService';

const Checkout = () => {
  const [cartItems, setCartItems] = useState([]);
  const [addresses, setAddresses] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [newAddress, setNewAddress] = useState({
    street: '',
    city: '',
    zipCode: '',
  });

  const [paymentAmount, setPaymentAmount] = useState(0);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const items = await CartService.getCartItems();
        setCartItems(items);
        const totalAmount = items.reduce((total, item) => total + parseFloat(item.productPrice), 0);
        setPaymentAmount(totalAmount.toFixed(2));
      } catch (error) {
        console.error('Error fetching cart items:', error);
      }
    };

    const fetchAddresses = async () => {
      try {
        const addressesData = await CheckoutService.getAddresses();
        setAddresses(addressesData);
      } catch (error) {
        console.error('Error fetching addresses:', error);
      }
    };

    fetchCartItems();
    fetchAddresses();
  }, []);

  const navigate = useNavigate();

  const handleAddressChange = (addressId) => {
    const selected = addresses.find((address) => address.id === addressId);
    setSelectedAddress(selected);
  };

  const handleNewAddressChange = (e) => {
    const { name, value } = e.target;
    setNewAddress((prevAddress) => ({
      ...prevAddress,
      [name]: value,
    }));
  };

  const handleAddAddressSubmit = async () => {
    try {
      await CheckoutService.addAddress(newAddress);
      const addressesData = await CheckoutService.getAddresses();
      setAddresses(addressesData);
      setNewAddress({
        street: '',
        city: '',
        zipCode: '',
      });
    } catch (error) {
      console.error('Error adding address:', error);
    }
  };

  const handlePlaceOrder = async () => {
    try {
      const orderData = {
        address: selectedAddress || newAddress,
        cartItems,
      };
      await CheckoutService.placeOrder(orderData);
      navigate('/view-payment', { state: { paymentAmount } });
    } catch (error) {
      console.error('Error placing order:', error);
    }
  };

  const calculateTotalAmount = () => {
    return cartItems.reduce((total, item) => total + parseFloat(item.productPrice), 0).toFixed(2);
  };

  return (
    <div>
      <h2>Checkout</h2>
      <div>
        <h3>Select Address:</h3>
        <ul>
          {addresses.length > 0 ? (
            addresses.map((address) => (
              <li key={address.id}>
                <label>
                  <input
                    type="radio"
                    name="address"
                    value={address.id}
                    onChange={() => handleAddressChange(address.id)}
                  />
                  {address.street}, {address.city}, {address.zipCode}
                </label>
              </li>
            ))
          ) : (
            <p>No existing addresses</p>
          )}
        </ul>
        <div>
          <h3>Add New Address:</h3>
          <form>
            <label>
              Street:
              <input
                type="text"
                name="street"
                value={newAddress.street}
                onChange={handleNewAddressChange}
              />
            </label>
            <br />
            <label>
              City:
              <input
                type="text"
                name="city"
                value={newAddress.city}
                onChange={handleNewAddressChange}
              />
            </label>
            <br />
            <label>
              Zip Code:
              <input
                type="text"
                name="zipCode"
                value={newAddress.zipCode}
                onChange={handleNewAddressChange}
              />
            </label>
            <br />
            <button type="button" onClick={handleAddAddressSubmit}>
              Add Address
            </button>
          </form>
        </div>
      </div>
      <div>
        <h3>Order Summary:</h3>
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
      <button onClick={handlePlaceOrder}>Payment</button>
      <Link to="/view-cart">Back to Cart</Link>
    </div>
  );
};

export default Checkout;
