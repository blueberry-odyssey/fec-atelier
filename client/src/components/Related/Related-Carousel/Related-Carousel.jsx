import React from 'react';
import './Related-Carousel.css';
import RelatedProduct from '../Related-Product/Related-Product.jsx';

export default function RelatedCarousel({ styleData, relatedItems, updateOverviewProduct, translate, overviewCharacteristics }) {
  // console.log('style in carousel', styleData);
  return (
    <div className='carousel' style={{ 'transform': `translateX(${translate}px)` }}>
      {relatedItems.map((product, idx) => {
        return <RelatedProduct
          key={product.id}
          product={product}
          styleData={styleData[idx]}
          updateOverviewProduct={updateOverviewProduct}
          overviewCharacteristics={overviewCharacteristics} />
      })}
    </div>
  )
};