import React from 'react'
import './Product.css'
import Price from './Price'
const Product = ({title,idx}) => {
    let oldPrice = ['12,499','11,990','1,599','599']
    let newPrice = ['8,999','9,199','899','278']
    let description = [["8,000 DPI","5 programmable buttons"], ["intuitive surface","designed for ipad pro"],["intuitive surface","designed for ipad pro"], ["wireless","optical orientation"],]
    return (
      <div className="Product">  
      <h4>{title}</h4>
      <p>{description[idx][0]}</p>
      <p>{description[idx][1]}</p>
      <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]}/>
      </div>
      
    )
  
  
}

export default Product
