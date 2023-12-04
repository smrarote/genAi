import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RegistrationForm from './component/RegistrationForm';
import LoginForm from './component/LoginForm';
import ForgotPassword from './component/ForgotPassword';
import ChangePassword from './component/ChangePassword';
import OtpVerification from './component/OtpVerification';
import Navbar from './component/Navbar';
import ProductNavbar from './products/ProductNavbar';
import AddProducts from './products/AddProducts';
import ViewProducts from './products/ViewProducts';
import CategoryNavbar from './categories/CategoryNavbar';
import ViewKids from './categories/ViewKids';
import ViewMens from './categories/ViewMens';
import ViewWomens from './categories/ViewWomens';
import Cart from './cart/Cart';
import Checkout from './checkout/Checkout';
import PaymentComponent from './payment/PaymentComponent';
import Orders from './checkout/Orders';
import LootoLogo from './looto/LootoLogo';
import AboutUs from './aboutus/AboutUs';

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<LoginForm />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/forgot" element={<ForgotPassword />} />
        <Route path="/change" element={<ChangePassword />} />
        <Route path="/otpverify" element={<OtpVerification />} />
        <Route path="/navbar" element={<Navbar />} />
        
        <Route path="/product-navbar" element={<ProductNavbar />} />
        <Route path="/add-products" element={<AddProducts />} />
        <Route path="/view-products" element={<ViewProducts />} />


        <Route path="/category-navbar" element={<CategoryNavbar />} />
        <Route path="/view-kids" element={<ViewKids />} />
        <Route path="/view-mens" element={<ViewMens />} />
        <Route path="/view-womens" element={<ViewWomens />} />

        <Route path="/view-cart" element={<Cart />} />

        <Route path="/view-checkout" element={<Checkout />} />
         
        <Route path="/view-payment" element={<PaymentComponent />} />

        <Route path="/view-orders" element={<Orders />} />

        <Route path="/view-logo" element={<LootoLogo />} />

        <Route path="/view-about" element={<AboutUs />} />

      </Routes>
    </Router>
  );
};

export default App;
