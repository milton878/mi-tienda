import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';



 const CartContext = React.createContext({});

  export  const useCartContext = () => useContext(CartContext);

const CartProvider = ({children}) =>{
    //logica para el carrito:
    const[cart, setCart] = useState([]);
    
    //Agregar al carrito
    const addProduct = (item, count)=>{
        if(isInCart(item.id)){
            setCart(cart.map(product =>{
                return product.id === item.id ? {...product, count: product.count + count} : product
            }));
        }else{
            setCart([...cart, { ...item, count }])
        }
    }

    //console.log('carrito:', cart);

    //creo funciones total precio y producto: valor inicial 0
    
    const totalPrice = () =>{
        return cart.reduce((prev, act)=> prev + act.count * act.price, 0);
    }
    const totalProducts = ()=> cart.reduce((acumulador, productoActual)=> acumulador  + productoActual.count, 0);

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
            addProduct,
            totalPrice,
            totalProducts,
            cart
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider