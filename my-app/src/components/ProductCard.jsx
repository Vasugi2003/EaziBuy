import React from 'react'
import '../style/ProductCard.css'
import { itemsAdded } from '../reducers/cartSlice'
import { useDispatch } from 'react-redux'

function ProductCard(props) {
    console.log(props.product)
    const {title, description,price, image} = props.product || {}
    const dispatch = useDispatch()

    const addItems = () =>{
        dispatch(itemsAdded(props.product))
    }
  
    return (
    <div className='product-card'>
      
        <img src={image} alt="" />
        <div className='title'>{title}</div> 
        <br />
        <div className='description'>{description}</div>
        <br />
        <div className='price'>${price}</div>
        <button onClick={addItems}>Add to Cart</button>

    </div>

  )
}

export default ProductCard

