import React from 'react'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useCartContext } from '../../Context/CartContext';




export const CartWidget = () => {
 const {totalProducts} =useCartContext();  

  return (
    <div id="cart-widget">

    
    <AiOutlineShoppingCart className='icon' />
    <span className='cart-num'>{totalProducts () || ''}</span>

    
    </div>
  )
}

