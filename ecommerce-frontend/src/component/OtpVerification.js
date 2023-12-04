import React, { useState } from 'react';
import UserService from './UserService';

const OtpVerification = ({ onNext }) => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [step, setStep] = useState(1);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  const handleSendOtp = async (e) => {
    e.preventDefault();

    try {
      // eslint-disable-next-line
      const response = await UserService.sendOtp({ email });
      setStep(2); // Move to the OTP verification step
    } catch (error) {
      // eslint-disable-next-line
      console.error('Error sending OTP:', error);
      // Handle error for OTP sending
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // eslint-disable-next-line
      const response = await UserService.verifyOtp({ email, otp });
      // Assuming the response indicates successful OTP verification
      onNext(); // Move to the next step
    } catch (error) {
      console.error('Error verifying OTP:', error);
      // Handle error for OTP verification
    }
  };

  return (
    <div>
     
      {step === 1 && (
        
        <div>
            <h2>Enter Email</h2>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter Email"
            required
          />
          <button onClick={handleSendOtp}>Send OTP</button>
        </div>
      )}

      {step === 2 && (
         <div>
         <h2>OTP Verification</h2>
         <form onSubmit={handleSubmit}>
           <input
             type="text"
             value={otp}
             onChange={handleOtpChange}
             placeholder="Enter OTP"
             required
           />
           <button type="submit">Submit</button>
         </form>
       </div>
      )}
    </div>
  );
};

export default OtpVerification;
