import React from 'react';
import './Related-Product.css'

export default function RelatedProduct({ product, styleData, updateOverviewProduct }) {
  let oneStyleImg = null;
  let originalPrice = null;
  let salePrice = null;
  if (styleData) {
    oneStyleImg = styleData.results[0].photos[0].thumbnail_url;
    originalPrice = styleData.results[0].original_price;
    for (let i = 0; i < styleData.results.length; i++) {
      if (styleData.results[i]['default?']) {
        oneStyleImg = styleData.results[i].photos[0].thumbnail_url;
        originalPrice = styleData.results[i].original_price;
        console.log('og price', originalPrice)
        salePrice = styleData.results[i].sale_price;
        continue;
      }
    }
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