// CheckoutService.js

const API_BASE_URL = 'http://localhost:8090/api/checkout';

const CheckoutService = {
  getAddresses: async () => {
    const response = await fetch(`${API_BASE_URL}/get-addresses`);
    const data = await response.json();
    return data;
  },

  addAddress: async (newAddress) => {
    const response = await fetch(`${API_BASE_URL}/add-addresses`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newAddress),
    });

    const data = await response.json();
    return data;
  },

  placeOrder: async (orderData) => {
    const response = await fetch(`${API_BASE_URL}/place-order`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(orderData),
    });

    const data = await response.json();
    return data;
  },
};

export default CheckoutService;
