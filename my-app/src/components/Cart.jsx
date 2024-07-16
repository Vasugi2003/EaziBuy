

import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import '../style/Cart.css';
import CartItems from './CartItems';
import ConfirmationModal from './ConfirmationModal';
import { clearCart } from '../reducers/cartSlice';

function Cart() {
  const items = useSelector((state) => state.Cart.items);
  const totalAmount = items.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);
  const [showModal, setShowModal] = useState(false);
  const [sortOption, setSortOption] = useState('default');
  const dispatch = useDispatch();

  const handleBuyNow = () => {
    if (items.length > 0) {
      setShowModal(true);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleConfirmPurchase = () => {
    setShowModal(false);
    // Use a timeout to ensure the state updates before navigating
    setTimeout(() => {
      window.location.href = '/order-confirmed';
      dispatch(clearCart()); // Clear the cart after navigation
    }, 0);
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  const sortedItems = [...items].sort((a, b) => {
    if (sortOption === 'low-to-high') {
      return a.price - b.price;
    }
    if (sortOption === 'high-to-low') {
      return b.price - a.price;
    }
    return 0;
  });

  return (
    <>
      <div className='cart-header'>
        <center>Cart</center>
        <div className='sort-container'>
          <label htmlFor="sort">Sort by Price: </label>
          <select id="sort" value={sortOption} onChange={handleSortChange}>
            <option value="default">Default</option>
            <option value="low-to-high">Low to High</option>
            <option value="high-to-low">High to Low</option>
          </select>
        </div>
      </div>
      <div className='cart-container'>
        {sortedItems.length > 0 ? (
          sortedItems.map((item) => (
            <CartItems item={item} key={item.id} />
          ))
        ) : (
          <div className='empty-cart-message'>
            Sorry, there is no element in the cart.
          </div>
        )}
      </div>
      {sortedItems.length > 0 && (
        <div className='cart-summary'>
          <div className='cart-total'>Total Amount: ${totalAmount}</div>
          <button className='buy-now' onClick={handleBuyNow}>Buy Now</button>
        </div>
      )}
      <ConfirmationModal show={showModal} onClose={handleCloseModal} onConfirm={handleConfirmPurchase} />
    </>
  );
}

export default Cart;
