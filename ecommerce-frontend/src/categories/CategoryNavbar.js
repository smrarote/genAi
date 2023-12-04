// CategoryNavbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const CategoryNavbar = () => {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/navbar">Home</Link></li>
          <li><Link to="/view-kids">Kids</Link></li>
          <li><Link to="/view-mens">Mens</Link></li>
          <li><Link to="/view-womens">Womens</Link></li>
        </ul>
      </nav>
      <div className="customer-welcome">
        <h1>Explore Our Collections!</h1>
        <p>Discover the latest trends and styles in Kids, Mens, and Womens fashion.</p>
        <p>Immerse yourself in a world of fashion where each category tells a unique story.</p>
        <p>Start your shopping journey now!</p>
        <p className="brand-message"><strong>We are the market Leader! Looto...!!</strong></p>
      </div>
    </div>
  );
};

export default CategoryNavbar;
