// LootoLogo.js

import React from 'react';
import './LootoLogo.css';  // Import your CSS file for styling

const LootoLogo = () => {
  return (
    <div className="looto-logo-container">
      <img src="/looto-logo.png" alt="Looto Logo" className="looto-logo" />
      <div className="welcome-message">
        <h1>Welcome to Looto!</h1>
        <p>Discover amazing products and great deals. Start your shopping journey with us!</p>
      </div>
      <div className="exciting-info">
        <p>Explore a world of exciting offers, exclusive discounts, and unbeatable deals.</p>
        <p>At Looto, we believe in providing you with the best shopping experience.</p>
      </div>
      <div className="special-offers">
        <h2>Special Offers</h2>
        <ul>
          <li>Flat 50% off on your first purchase!</li>
          <li>Buy 2, Get 1 Free on selected items.</li>
          <li>Exclusive discounts for our loyal customers.</li>
        </ul>
      </div>
    </div>
  );
};

export default LootoLogo;
