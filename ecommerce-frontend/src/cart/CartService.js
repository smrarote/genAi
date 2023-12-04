import axios from 'axios';
const BASE_URL = "http://localhost:8090/api/cart";

const CartService = {

    saveProductDetails: async (productDetails) => {
        try {
            const response = await axios.post(`${BASE_URL}/add-product`, productDetails);
            return response.data;
        } catch (error) {
            throw new Error(`Error saving product details: ${error}`);
        }
    },
    
    getCartItems: async () => {
        try {
            const response = await axios.get(`${BASE_URL}/cart-items`);
            return response.data;
        } catch (error) {
            throw new Error(`Error fetching cart items: ${error}`);
        }
    },
    removeProductFromCart: async (productId) => {
        try {
            const response = await axios.delete(`${BASE_URL}/remove-product/${productId}`);
            return response.data;
        } catch (error) {
            throw new Error(`Error removing product from cart: ${error}`);
        }
    }
};
export default CartService;