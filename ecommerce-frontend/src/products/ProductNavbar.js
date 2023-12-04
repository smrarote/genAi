// ProductNavbar.js
import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

const ProductNavbar = () => {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/navbar">Home</Link></li>
          <li><Link to="/add-products">Add Products</Link></li>
          <li><Link to="/view-products">View Products</Link></li>
          {/* Add more links for other product-related options */}
        </ul>
      </nav>
      <div className="admin-welcome">
        <h1>Welcome, Admin!</h1>
        <p>Manage your products and make your store shine.</p>
        <p>Add new products, view existing ones, and keep your inventory up-to-date.</p>
        <p>Explore the options above to get started!</p>
      </div>
    </div>
  );
};

export default ProductNavbar;
