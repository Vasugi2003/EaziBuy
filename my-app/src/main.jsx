import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './store.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Counter from './components/Counter.jsx';
import About from './components/About.jsx';
import Products from './components/Product.jsx';
import Cart from './components/Cart.jsx';
import Home from './components/Home.jsx';
import OrderConfirmed from './components/OrderConfirmed.jsx'; // Import the OrderConfirmed component

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/product" element={<Products />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/counter" element={<Counter />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/order-confirmed" element={<OrderConfirmed />} /> {/* Add route for OrderConfirmed */}
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);