import React from 'react'
import Product from './Product.jsx'
const ProductTab = () => {
    let features = ['durable', 'hi-tech']
    let features2 = {a:'durable', b:'hi-tech'}
  return (
    <div>
      <Product title="phone" price={50000} features={features} features2={features2}/>
    </div>
  )
}

export default ProductTab
