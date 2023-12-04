import React, { useState } from 'react';
import UserService from './UserService';
import OtpVerification from './OtpVerification'; // Importing the OTP Verification component

const ForgotPassword = () => {
  const [formData, setFormData] = useState({
    email: '',
    newPassword: '',
    confirmNewPassword: '',
    step: 1
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNext = () => {
    setFormData({ ...formData, step: formData.step + 1 });
  };

  const handleResetPassword = async () => {
    try {
      // eslint-disable-next-line 
      const response = await UserService.forgotPassword({
        email: formData.email,
        newPassword: formData.newPassword,
        confirmNewPassword: formData.confirmNewPassword,
      });
      console.log('Password changed successfully');
    } catch (error) {
      console.error('Error changing password:', error);
    }
  };

  return (
    <div>
      {formData.step === 1 && (
        <OtpVerification
          email={formData.email}
          onNext={handleNext}
          onChange={handleChange}
        />
      )}

      {formData.step === 2 && (
        <div>
          <h2>Reset Password</h2>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
          />
          <input
            type="password"
            name="newPassword"
            value={formData.newPassword}
            onChange={handleChange}
            placeholder="New Password"
            required
          />
          <input
            type="password"
            name="confirmNewPassword"
            value={formData.confirmNewPassword}
            onChange={handleChange}
            placeholder="Confirm New Password"
            required
          />
          <button onClick={handleResetPassword}>Reset Password</button>
        </div>
      )}
    </div>
  );
};

export default ForgotPassword;
