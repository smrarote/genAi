import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserService from './UserService'; // Importing the UserService module

const ChangePassword = () => {
  const [formData, setFormData] = useState({
    email: '',
    oldPassword: '',
    newPassword: '',
    confirmNewPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // eslint-disable-next-line 
      const response = await UserService.sendPasswordChangeRequest({
        email: formData.email,
        oldPassword: formData.oldPassword,
        newPassword: formData.newPassword,
        confirmNewPassword: formData.confirmNewPassword,
      });

      navigate('/login');
    } catch (error) {
      console.error('Error changing password:', error);
    }
  };

  const handlePrevious = () => {
    // You can add any logic to handle going back to the previous step
    navigate('/login')
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
          name="oldPassword"
          value={formData.oldPassword}
          onChange={handleChange}
          placeholder="Old Password"
          required
        />
      </div>
      <div>
        <input
          type="password"
          name="newPassword"
          value={formData.newPassword}
          onChange={handleChange}
          placeholder="New Password"
          required
        />
      </div>
      <div>
        <input
          type="password"
          name="confirmNewPassword"
          value={formData.confirmNewPassword}
          onChange={handleChange}
          placeholder="Confirm New Password"
          required
        />
      </div>
      <button type="button" onClick={handlePrevious}>Previous</button>
      <button type="submit" onClick={handleSubmit}>Submit</button>
    </form>
  );
};

export default ChangePassword;
