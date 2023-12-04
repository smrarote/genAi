// AboutUs.js

import React from 'react';
import './AboutUs.css';  // Import your CSS file for styling

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <h1>About Us</h1>
      <div className="mission-section">
        <h2>Our Mission</h2>
        <p>
          At Looto, our mission is to provide a seamless and enjoyable shopping experience for our customers.
          We strive to offer a diverse range of high-quality products and unbeatable deals.
        </p>
      </div>
      <div className="team-section">
        <h2>Meet Our Team</h2>
        <div className="team-member">
        <img src="./Images/ganesh.JPG" alt="Ganesh Gopale" />
          <h3>Ganesh Gopale</h3>
          <p>Founder & CEO</p>
        </div>
        <div className="team-member">
          <img src="./Images/ganesh.jpg" alt="Jane Doe" />
          <h3>Jane Doe</h3>
          <p>Co-Founder & CTO</p>
        </div>
        {/* Add more team members as needed */}
      </div>
    </div>
  );
};

export default AboutUs;
