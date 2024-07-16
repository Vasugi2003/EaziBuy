

import React from 'react';
import { useSelector } from 'react-redux';
import '../style/OrderConfirmed.css';

function OrderConfirmed() {
  const items = useSelector((state) => state.Cart.items);

  return (
    <div className='order-confirmed'>
      {
        <>
          <h1>Thank You for Your Purchase!</h1>
          <p>Your order has been confirmed and is being processed. You will receive a confirmation email shortly.</p>
        </>
      }
    </div>
  );
}

export default OrderConfirmed;
