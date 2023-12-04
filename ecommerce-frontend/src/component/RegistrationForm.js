import React, { useState } from 'react';
import UserService from './UserService';  
import { useNavigate } from 'react-router-dom';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission (e.g., sending data to the server)
    console.log('Form submitted:', formData);

    // Call the API to register the user
    UserService.registerUser(formData)
      .then((response) => {
        console.log('User registered successfully:', response.data);
      })
      .catch((error) => {
        console.error('Error registering user:', error);
      });

      navigate('/login');
  };

  return (
    <form>
      <div>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="First Name"
          required
        />
      </div>
      <div>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Last Name"
          required
        />
      </div>
      <div>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
      </div>
      <div>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          required
        />
      </div>
      <div>
        <button type="button" onClick={handleSubmit}>Register</button>
      </div>
    </form>
  );
};

export default RegistrationForm;


