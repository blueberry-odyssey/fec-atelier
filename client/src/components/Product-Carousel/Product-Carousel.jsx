import React from 'react';
import './Product-Carousel.css';
import RelatedProduct from '../Related-Product/Related-Product.jsx';

export default function ProductCarousel ({relatedItems}) {

    return (
      <div className='carousel'>
        {relatedItems.map(product => {
          return <RelatedProduct  key={product.id} product={product}/>
        })}
      </div>
    )

};