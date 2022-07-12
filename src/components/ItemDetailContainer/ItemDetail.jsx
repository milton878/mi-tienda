import React from 'react'
import {ItemCount} from '../ItemCount/ItemCount'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import {useCartContext} from '../../Context/CartContext'

export const ItemDetail = ({title, despcription, price, pictureUrl}) => {
 const[goToCart, setGoToCart] = useState(false);

 const { addProduct } = useCartContext();
 
  const onAdd = (count)=>{
    setGoToCart(true);
    // alert(`Agregaste ${count} items al carrito`)

    addProduct(title, despcription,price,pictureUrl, count);
  }
  return (
    <div id='item-detail'>
        <div id='portada'>
            <img src={pictureUrl} alt={title} />
        </div>
        <div id='data'>
            <h1>{title}</h1>
            <h2>{despcription}</h2>
            <h3>${price}</h3>
            {
              goToCart
              ? <Link to='/Cart'>Terminar Compra</Link>
              :
              <ItemCount  stock={5} initial={1} onAdd={onAdd} />
            }
            

        </div>

    </div>
  )
}
export default ItemDetail