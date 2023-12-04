import React, { useState } from 'react';

import UserService from './UserService'; // Importing the UserService module
import { useNavigate } from 'react-router-dom';


const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await UserService.loginUser(formData);

      if (response.data === 'Login successful') {
        // Handle successful login (e.g., redirect to home page)
        console.log('User logged in successfully');
        navigate('/navbar')
      } else {
        console.error('Error:', response.data); // Handle other cases (e.g., invalid credentials)
      }
    } catch (error) {
      console.error('Error:', error); // Handle network or server error
    }
  };

 
  const handleForgotPassword = () => {
    // Redirect to forgot password page

    //history.push('/forgot');
    navigate('/forgot');
  
  };
  const handleSignup = () => {
     navigate('/register');
  };
  const handleChangePassword = () => {
    // Redirect to change password page
    //history.push('/change');
    navigate('/change');
  };

  return (
    <form onSubmit={handleSubmit}>
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
        <button type="submit" onClick={handleSubmit}>Login</button>
        <button type="submit" onClick={handleSignup}>SignUp</button>
        <button type="button" onClick={handleForgotPassword}>Forgot Password</button>
        <button type="button" onClick={handleChangePassword}>Change Password</button>
      </div>
    </form>
  );
};

export default LoginForm;
