


import React from 'react';
import { useDispatch } from 'react-redux';
import { itemDeleted, quantityUpdated } from '../reducers/cartSlice';
import '../style/CartItems.css';

function CartItems(props) {
  const { title, description, price, id, image, quantity } = props.item;
  const dispatch = useDispatch();

  const deleteItem = () => {
    dispatch(itemDeleted(id));
  };

  const changeQuantity = (quantityChange) => {
    dispatch(quantityUpdated({ id, quantityChange }));
  };

  const totalAmount = (price * quantity).toFixed(2);

  return (
    <div className='cart-product-card'>
      <img src={image} alt={title} className='cart-img' />
      <div className='cart-product-details'>
        <h1>{title}</h1>
        <p>{description}</p>
        <div className='cart-product-price'>Price: ${price}</div>
        <div className='cart-product-quantity'>
          <button
            className='minus-quantity'
            onClick={() => changeQuantity(-1)}
            disabled={quantity <= 1}
          >
            -
          </button>
          <button className='plus-quantity' onClick={() => changeQuantity(1)}>
            +
          </button>
          <span>Quantity: {quantity}</span>
        </div>
        <div className='cart-product-total'>Total: ${totalAmount}</div>
      </div>
      <div className='cart-product-delete'>
        <button onClick={deleteItem}>Delete</button>
      </div>
    </div>
  );
}

export default CartItems;
