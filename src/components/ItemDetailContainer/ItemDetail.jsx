import React from 'react'

export const ItemDetail = ({title, despcription, price, pictureUrl}) => {
  return (
    <div id='item-detail'>
        <div id='portada'>
            <img src={pictureUrl} alt={title} />
        </div>
        <div id='data'>
            <h1>{title}</h1>
            <h2>{despcription}</h2>
            <h3>${price}</h3>
        </div>

    </div>
  )
}
