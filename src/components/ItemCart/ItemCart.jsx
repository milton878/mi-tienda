import React from "react";
import { useCartContext } from "../../Context/CartContext";

import './ItemCart.css';

const ItemCart = ({product})=>{
    const{removeProduct}  = useCartContext();
    return(
        <div className="itemCart">
            <img src={product.pictureUrl} alt={product.title} />
            <div >
                
                <p>Titulo: {product.title}</p>
                <p>Cantidad:{product.count}</p>
                <p>Precio : {product.price}</p>
                <p>Categoria: {product.category}</p>
                <p>subtotal:${product.count * product.price}</p>
                <button onClick={()=>removeProduct(product.id)}>Eliminar</button>
            </div>
        </div>
    )
}
export default ItemCart