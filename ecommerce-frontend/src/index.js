import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import { loadStripe } from '@stripe/stripe-js';
//import PaymentWithElements from './payment/PaymentWithElements';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

/*const stripePromise = loadStripe('pk_test_OI4SeSBHPnYp7dnyr5G00RMXicoK4lrMBCh6yQ2V7mrNXI6NBma2oGwcCRJBvgQxIW7A5DeC4VynJjXBDxZ3PXu00g9txVeI6');

ReactDOM.render(
  <React.StrictMode>
    <PaymentWithElements stripePromise={stripePromise} />
  </React.StrictMode>,
  document.getElementById('root')
);*/
