import React, { Children, useContext } from "react";
import { useState } from "react";
import {Cart} from' ./components/Cart/Cart';

 const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartProvider = () =>{
    //logica para el carrito:
    //Agregar al carrito
    const[cart, setCart] = useState([]);
    const addProduct = (item, count)=>{
        if(isInCart(item.id)){
            setCart(cart.map(product =>{
                return product.id === item.id ? {...product, count:product.count + count} : product
            }));
        }else{
            setCart([...Cart,{...item, count }])
        }
    }

    console.log('carrito:', cart);

    //Limpiar Carrito
    const clearCart = ()=>([]);

    //para saber si un producto ya esta en el carrito
    const isInCart = (id) => cart.find(product =>product.id === id) ? true : false;
    
    //Borrar del carrito
    const removeProduct = (id) =>setCart(cart.filter(product=>product.id !== id));



    return(
        <CartContext.Provider value={{
            clearCart,
            isInCart,
            removeProduct,
            addProduct
        }}>
            {Children}
        </CartContext.Provider>
    )
}

export default CartProvider