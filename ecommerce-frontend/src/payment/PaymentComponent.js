// PaymentComponent.js

import React, { useState } from 'react';
import { CardElement, useStripe, useElements, Elements } from '@stripe/react-stripe-js';
import PaymentService from './paymentService';
import { loadStripe } from '@stripe/stripe-js';
import { useLocation } from 'react-router-dom'; // Add this import
import { useNavigate } from 'react-router-dom'

const stripePromise = loadStripe('pk_test_OI4SeSBHPnYp7dnyr5G00RMXicoK4lrMBCh6yQ2V7mrNXI6NBma2oGwcCRJBvgQxIW7A5DeC4VynJjXBDxZ3PXu00g9txVeI6');

const PaymentForm = ({ paymentAmount, onSuccess }) => {
  const [paymentDescription, setPaymentDescription] = useState('Payment for Products');
  const stripe = useStripe();
  const elements = useElements();

  const handlePayment = async () => {
    const { paymentMethod, error } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });

    if (!error) {
      try {
        const response = await PaymentService.charge(paymentMethod.id, paymentAmount, paymentDescription);
        console.log(response); // Handle the response as needed
        onSuccess(); // Notify the parent component about successful payment
      } catch (error) {
        console.error('Error processing payment:', error.message);
      }
    } else {
      console.error(error.message);
    }
  };
  
  const navigate = useNavigate();
  const Home = async () => {
      navigate('/navbar');
  };

  return (
    <div>
      <h2>Payment</h2>
      <div>
        <label>
          Card Details:
          <CardElement />
        </label>
      </div>
      <div>
        <label>
          Amount:
          <input type="text" value={paymentAmount} readOnly />
        </label>
      </div>
      <div>
        <label>
          Description:
          <input
            type="text"
            value={paymentDescription}
            onChange={(e) => setPaymentDescription(e.target.value)}
          />
        </label>
      </div>
      <button onClick={handlePayment}>Pay Now</button>
      <button onClick={Home}>Go To Home</button>
    </div>
  );
};

const PaymentComponent = ({ onPaymentSuccess }) => {
  const location = useLocation();
  const paymentAmount = location.state ? location.state.paymentAmount : 0;

  return (
    <Elements stripe={stripePromise}>
      <PaymentForm paymentAmount={paymentAmount} onSuccess={onPaymentSuccess} />
    </Elements>
  );
};

export default PaymentComponent;
