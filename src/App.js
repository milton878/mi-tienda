import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import {NavBar} from './components/NavBar/NavBar';
import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
  
  return (
    <>
    {
      <BrowserRouter> 
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer />}/>
        <Route path='/category/:categoryId' element={<ItemListContainer />}/>
        <Route path='/item/:itemId' element={<ItemDetailContainer />}/>
        

       




        

      </Routes>
      
      
      </BrowserRouter>
      /*
      
            <ItemCount  stock={5} initial={1} onAdd={onAdd} />
      
      
      
      */
    }
    
      </>
  );
}

export default App;
