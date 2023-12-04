import axios from 'axios';

const BASE_URL = "http://localhost:8090/api/v1";

const ProductService = {
    uploadImage: async (image) => {
        const formData = new FormData();
        formData.append('image', image);

        try {
            const response = await axios.post(`${BASE_URL}/upload-image`, formData);

            if (response.data) {
                return response.data;
            } else {
                throw new Error('Invalid response from server');
            }
        } catch (error) {
            console.error('Error uploading image:', error);
            throw error;
        }
    },

    addProduct: (formData) => {
        return axios.post(`${BASE_URL}/add`, formData);
    },

    getAllProducts: () => {
        return axios.get(`${BASE_URL}/products`);
    },

    getProductsByCategory: (category) => {
        return axios.get(`${BASE_URL}/product-category`, {
            params: {
                category: category
            }
        });
    }
};

export default ProductService;
