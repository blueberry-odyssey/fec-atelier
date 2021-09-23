import React, { useState } from 'react';
import './Related-Carousel.css';
import RelatedProduct from '../Related-Product/Related-Product.jsx';

export default function RelatedCarousel({ styleData, relatedItems, updateOverviewProduct, translate, overviewCharacteristics }) {
  // console.log('style in carousel', styleData);
  const [display, setDisplay] = useState(false)
  const showModal = () => {
    setDisplay(!display);
  }

  return (
    <div className='carousel' style={display ? {'transform': 'none'} : { 'transform': `translateX(${translate}px)` }}>
      {relatedItems.map((product, idx) => {
        console.log('in the real carry', product, 'and', styleData[0])
        return <RelatedProduct
          showModal={showModal}
          display={display}
          key={product.id}
          product={product}
          styleData={styleData[idx]}
          updateOverviewProduct={updateOverviewProduct}
          overviewCharacteristics={overviewCharacteristics} />
      })}
    </div>
  )
};