// PaymentService.js

import axios from 'axios';

const BASE_URL = 'http://localhost:8090/api/payment'; // Replace with your server URL

const PaymentService = {
  charge: async (token, amount, description) => {
    try {
      const response = await axios.post(`${BASE_URL}/charge`, {
        token,
        amount,
        description,
      });
      return response.data;
    } catch (error) {
      console.error('Error charging payment:', error);
      throw error;
    }
  },
};

export default PaymentService;
