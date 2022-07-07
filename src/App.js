import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import {Cart} from './components/Cart/Cart';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import {NavBar} from './components/NavBar/NavBar';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import React from 'react';
import {CartProvider} from './Context/CartContext'


function App() {
  
  return (
    <>
    {
        <BrowserRouter> 
        
          <CartProvider>
            <NavBar />
            <Routes>
              <Route path='/' element={<ItemListContainer />}/>
              <Route path='/category/:categoryId' element={<ItemListContainer />}/>
              <Route path='/Cart' element={<Cart />}/>
              <Route path='/item/:itemId' element={<ItemDetailContainer />}/>
        
            </Routes>
          </CartProvider>
      
        </BrowserRouter>
      /*
      
            <ItemCount  stock={5} initial={1} onAdd={onAdd} />
      
      
      
      */
    }
    
      </>
  );
}

export default App;
