import React from 'react'
import { getArray } from '../helpers/getArray'
import { array } from '../../data/data'
import { useEffect } from 'react'
import { useState } from 'react'
import { ItemList } from './ItemList'
import { useParams } from 'react-router-dom'
import "./ItemListContainer.scss"

export const ItemListContainer = () => {
  const[products, setProducts] = useState([])
  const[loading, setLoading] = useState(true)
  const{categoryId} = useParams()
  

  useEffect(() =>{
    
    getArray(array)
      .then(res=>{
        categoryId?
          setProducts(res.filter((item)=> item.category === categoryId))
          :
            setProducts(res)
      })
      .catch(err=>console.log(err))
      .finally(()=>setLoading(false))
  }, [categoryId])

  

  return (
    <div id='item-list-container'>
      {
        loading?
          <div> Cargando...</div>
        :
          <ItemList items={products}/>
      }
    </div>
  )
}
