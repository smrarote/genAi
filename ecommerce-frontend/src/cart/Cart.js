import React, { useState, useEffect } from 'react';
import CartService from './CartService';
import { useNavigate } from 'react-router-dom'

const Cart = () => {
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

    const removeFromCart = async (productId) => {
        try {
            await CartService.removeProductFromCart(productId);
            // Update the local state after successful removal
            setCartItems(cartItems.filter(item => item.id !== productId));
        } catch (error) {
            console.error('Error removing item from cart:', error);
        }
    };
    
    const navigate = useNavigate();
    const placeOrder = async () => {
        navigate('/view-checkout');
    };

    const calculateTotalAmount = () => {
        return cartItems.reduce((total, item) => total + parseFloat(item.productPrice), 0).toFixed(2);
    };

    return (
        <div>
            <h2>Cart</h2>
            <ul>
                {cartItems.map((item) => (
                    <li key={item.id}>
                        <h3>{item.productName}</h3>
                        <p>Category: {item.productCategory}</p>
                        <p>Price: {item.productPrice}</p>
                        <img src={item.productImage} alt={item.productName} style={{ maxWidth: '200px' }} />
                        <p>Description: {item.productDescription}</p>
                        <button onClick={() => removeFromCart(item.id)}>Remove</button>
                    </li>
                ))}
            </ul>
            <p>Total Items: {cartItems.length}</p>
            <p>Total Amount: ${calculateTotalAmount()}</p>
            <button onClick={placeOrder}>Checkout</button>
        </div>
    );
};

export default Cart;
