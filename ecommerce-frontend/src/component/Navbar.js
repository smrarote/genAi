import React from 'react';
import './Navbar.css'; // Import the CSS file for styling

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="logo">
          <a href="/view-logo">Looto</a>
        </div>
        <ul className="nav-links">
          <li><a href="/navbar">Home</a></li>
          <li><a href="/product-navbar">Products</a></li>
          <li><a href="/category-navbar">Categories</a></li>
          <li><a href="/view-cart">Cart</a></li>
          <li><a href="/view-orders">Orders</a></li>
          <li><a href="/view-about">About Us</a></li>
          <li><a href="/login">Logout</a></li>
        </ul>
      </nav>

      <div className="welcome-section">
        <h1>Welcome to Our Looto Store!</h1>
        <p>Discover amazing products and great deals. Start shopping now!</p>
        {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
        <p className="highlighted-blinking">🌟 Flat 50% off on your first shopping! 🌟</p>
        <p>Happy Shopping!</p>
        <p>Don't miss out on our latest deals and discounts. Explore our catalog today.</p>
      </div>
    </div>
  );
};

export default Navbar;
