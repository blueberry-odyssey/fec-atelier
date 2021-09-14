import React from 'react';
import './Related-Product.css'

export default function RelatedProduct ({product}) {

    return (
      <div className='each-product'>One Related Product
        <div>{product.name}</div>
        <div>Star Button</div>
        <div>{product.default_price}</div>
        <div>{product.category}</div>
        <div>Star Rating</div>

      </div>
    )

}