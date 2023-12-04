import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import ProductService from '../products/ProductService';
import CartService from '../cart/CartService';


const ViewWomens = () => {
    const [womensProducts, setWomensProducts] = useState([]);

    useEffect(() => {
        const fetchWomensProducts = async () => {
            try {
                const response = await ProductService.getProductsByCategory('womens');
                setWomensProducts(response.data);
            } catch (error) {
                console.error('Error fetching womens products:', error);
            }
        };

        fetchWomensProducts();
    }, []);

    const navigate = useNavigate();

    const handleBuyNow = async () => {
        navigate('/view-checkout');
    };

    const handleAddToCart = async (product) => {
        try {
            const response = await CartService.saveProductDetails({
                productName: product.productName,
                productCategory: product.productCategory,
                productPrice: product.productPrice,
                productDescription: product.productDescription,
                productImage: product.productImage,
            });
            console.log('Product details saved:', response);
        } catch (error) {
            console.error('Error saving product details:', error);
        }
    };

    return (
        <div>
            <Link to="/category-navbar" style={{ color: 'black', textDecoration: 'none' }}>Previous</Link>
            <h2>View Women's Products</h2>
            <ul>
                {womensProducts.map((product) => (
                    <li key={product.id} style={{ marginBottom: '20px', borderBottom: '1px solid #ccc', paddingBottom: '20px' }}>
                        <h3>{product.productName}</h3>
                        <p>Price: {product.productPrice}</p>
                        <img src={product.productImage} alt={product.productName} style={{ maxWidth: '200px', marginBottom: '10px' }} />
                        <p>Description: {product.productDescription}</p>
                        <div>
                            <button onClick={() => handleBuyNow()}>Buy Now</button>
                            <button onClick={() => handleAddToCart(product)}>Add To Cart</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ViewWomens;
