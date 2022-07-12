import React from 'react';
import { useState } from 'react';
// import { useCartContext } from 'react';




  export const CartContext = React.createContext([]);

   //  const useCartContext = () => CartContext(Context);

const CartProvider = ({children}) =>{
    //logica para el carrito:
    
    const[cart, setCart] = useState([]);
    //Agregar al carrito
    const addProduct = (item, count)=>{
        if(isInCart(item.id)){
            setCart(cart.map(product =>{
                return product.id === item.id ? {...product, count:product.count + count} : product
            }));
        }else{
            setCart([...cart, { ...item, count }])
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
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider