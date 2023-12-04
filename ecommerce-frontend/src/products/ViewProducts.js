// ViewProducts.js

import React, { useState, useEffect } from 'react';
import ProductService from './ProductService';


const ViewProducts = () => {


    const [products, setProducts] = useState([]);

    /*useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await ProductService.getAllProducts();
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);  */
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await ProductService.getAllProducts();
                setProducts(response.data);
                
                // Log the product image paths
                response.data.forEach(product => {
                    console.log('Product Image Path:', product.productImage);
                });
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };
    
        fetchProducts();
    }, []);

    return (
        <div>
            <h2>View Products</h2>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        <h3>{product.productName}</h3>
                        <p>Category: {product.productCategory}</p>
                        <p>Price: {product.productPrice}</p>
                        {/* Render the image */}
                        <img src={product.productImage} alt={product.productName} style={{ maxWidth: '200px' }} />
                        <p>Description: {product.productDescription}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ViewProducts;
