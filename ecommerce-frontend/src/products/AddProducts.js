import React, { useState } from 'react';
import ProductService from './ProductService';

const AddProduct = () => {
    const [formData, setFormData] = useState({
        productName: '',
        productCategory: 'kids',
        productPrice: '',
        productImage: '',
        productDescription: '',
    });

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        const { productName, productCategory, productPrice, productImage, productDescription } = formData;

        const formDataToSend = new FormData();
        formDataToSend.append('productName', productName);
        formDataToSend.append('productCategory', productCategory);
        formDataToSend.append('productPrice', productPrice);
        formDataToSend.append('productImage', productImage);
        formDataToSend.append('productDescription', productDescription);

        try {
            // Send the image to the server for storage and get the file path
            const imagePath = await ProductService.uploadImage(productImage);
            
            // Add the file path to the form data
            formDataToSend.append('productImage', imagePath);

            // Submit the form with all data including the image path
            const response = await ProductService.addProduct(formDataToSend);

            alert(response.data);
            setFormData({
                productName: '',
                productCategory: 'kids',
                productPrice: '',
                productImage: '',
                productDescription: '',
            });
        } catch (error) {
            console.error('Error adding product:', error);
        }
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        setFormData({ ...formData, productImage: file });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <div>
            <h2>Add Product</h2>
            <form onSubmit={handleFormSubmit}>
                <div>
                    <label htmlFor="productName">Product Name:</label>
                    <input
                        type="text"
                        id="productName"
                        name="productName"
                        value={formData.productName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="productCategory">Product Category:</label>
                    <select
                        id="productCategory"
                        name="productCategory"
                        value={formData.productCategory}
                        onChange={handleChange}
                        required
                    >
                        <option value="kids">Kids</option>
                        <option value="mens">Mens</option>
                        <option value="womens">Womens</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="productPrice">Product Price:</label>
                    <input
                        type="number"
                        id="productPrice"
                        name="productPrice"
                        value={formData.productPrice}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="productImage">Product Image:</label>
                    <input
                        type="file"
                        accept="image/*"
                        id="productImage"
                        onChange={handleImageUpload}
                        required
                    />
                    {formData.productImage && <img src={URL.createObjectURL(formData.productImage)} alt="Product Preview" style={{ maxWidth: '200px' }} />}
                </div>
                <div>
                    <label htmlFor="productDescription">Product Description:</label>
                    <textarea
                        id="productDescription"
                        name="productDescription"
                        value={formData.productDescription}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Add Product</button>
            </form>
        </div>
    );
};

export default AddProduct;
