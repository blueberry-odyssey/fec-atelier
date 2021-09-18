import React from 'react';
import './Related-Product.css'

export default function RelatedProduct({ product, styleData, updateOverviewProduct }) {
  let oneStyleImg = null;
  let originalPrice = null;
  let salePrice = null;
  if (styleData) {
    for (let i = 0; i < styleData.results.length; i++) {
      if (styleData.results[i]['default?']) {
        oneStyleImg = styleData.results[i].photos[0].thumbnail_url;
        originalPrice = styleData.results[i].original_price;
        salePrice = styleData.results[i].sale_price;
      }
    }
    console.log("oneStyleImg", oneStyleImg)
  }

  // console.log('where my image', oneStyleImg)
  let handleProductClick = () => {
    let currentProduct = e.target;
    console.log('currentProduct', currentProduct)
  }
  return (
    <div className='each-product' onClick={handleProductClick}>
      <div>
        <img src={oneStyleImg}></img>
        {/* <div>Star Button</div> */}
      </div>
      <div>
        <div>{product.category}</div>
        <div>{product.name}</div>
        {salePrice ?
          <div>
            <div id='red'>{salePrice}</div>
            <div style={{'text-decoration': 'line-through'}}>{originalPrice}</div>
          </div>
          :
          <div>{originalPrice}</div>
        }
        <div>Star Rating</div>
      </div>
    </div>
  )
};