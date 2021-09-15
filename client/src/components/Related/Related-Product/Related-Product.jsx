import React from 'react';
import './Related-Product.css'

export default function RelatedProduct({ product, styleData}) {

  // let oneStyleImg = styleData.results[0].photos[0].thumbnail_url || null;
  let oneStyleImg = null;
  styleData ? oneStyleImg = styleData.results[0].photos[0].thumbnail_url : null;
  console.log('where my image', styleData)
  return (
    <div className='each-product'>
      <section>
        <img href={oneStyleImg}></img>
        <div>Star Button</div>
      </section>
      <section>
        <div>{product.category}</div>
        <div>{product.name}</div>
        <div>{product.default_price}</div>
        <div>Star Rating</div>
      </section>
    </div>
  )
};