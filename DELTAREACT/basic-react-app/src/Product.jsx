import React from 'react'
import './Product.css'
const Product = ({title,price,features,features2}) => {
  return (
    <div className='Product'>
      <h1>{title}</h1>
      <p>{price}</p>
      <p>{features}</p>
      <p>{features2.a}</p>
    </div>
  )
}

export default Product
