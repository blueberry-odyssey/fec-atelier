import React from 'react';
import './Product-Carousel.css';
import RelatedProduct from '../Related-Product/Related-Product.jsx';

export default function RelatedCarousel({ styleData, relatedItems }) {
  // console.log('style in carousel', styleData);
  return (
    <div>
      {relatedItems.map((product, idx) => {
        return <RelatedProduct
          key={product.id}
          product={product}
          styleData={styleData[idx]}
          updateOverviewProduct={this.updateOverviewProduct} />
      })}
    </div>
  )
};