import React, { useState } from 'react';
import './Related-Product.css'
import ModalPopup from '../Modal-Popup/Modal-Popup.jsx'

export default function RelatedProduct({ product, styleData, updateOverviewProduct, overviewCharacteristics }) {
  const [display, setDisplay] = useState(false);

  let oneStyleImg, originalPrice;
  let salePrice = null;
  if (styleData) {
    oneStyleImg = styleData.results[0].photos[0].thumbnail_url;
    originalPrice = styleData.results[0].original_price;
    for (let i = 0; i < styleData.results.length; i++) {
      if (styleData.results[i]['default?']) {
        oneStyleImg = styleData.results[i].photos[0].thumbnail_url;
        originalPrice = styleData.results[i].original_price;
        salePrice = styleData.results[i].sale_price;
      }
    }
    // console.log('og price', salePrice)
  }

  let handleStarClick = () => {
    if (!display) {
      setDisplay(true);
    }
  }

  // console.log('where my image', product)
  let handleProductClick = (e) => {
    let currentProduct = e.target.parentNode;
    console.log('currentProduct', currentProduct)
  }

  return (
    <div className='each-product' onClick={()=>{updateOverviewProduct(product.id)}}>
      <div>
        <img src={oneStyleImg}></img>
        <i onClick={handleStarClick} id="starIcon" className="far fa-star"></i>
        <ModalPopup
        show={display}
        product={product}
        overviewCharacteristics={overviewCharacteristics}/>
      </div>
      <section>
        <p>{product.category}</p>
        <h3>{product.name}</h3>
        {salePrice ?
          <div>
            <div id='red'>{salePrice}</div>
            <div style={{'text-decoration': 'line-through'}}>{originalPrice}</div>
          </div>
          :
          <div>{originalPrice}</div>
        }
        <div>Star Rating</div>
      </section>
    </div>
  )
};