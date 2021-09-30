import React, { useState, useEffect } from 'react';
import './Related-Product.css'
import ModalPopup from '../Modal-Popup/Modal-Popup.jsx'
import UpdatedComponent from '../../interactions.jsx'

function RelatedProduct(props) {
  const [displayOne, setDisplayOne] = useState(false);
  const {
    currentProduct,
    inOutfit,
    product,
    styleData,
    updateOverviewProduct,
    overviewCharacteristics,
    removeOutfit,
    popupModal
  } = props;

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

  const handleCloseClick = () => {
    removeOutfit(currentProduct)
  }

  // var closeOrStar = <i onClick={()=> popupModal(product)} className="far fa-star starIcon"></i>;
  // if (inOutfit) {
  //   closeOrStar = <i onClick={handleCloseClick} className="far fa-window-close starIcon"></i>

  // }
  return (
    <div className='each-product' id={inOutfit ? 'outfit-product' : null}>
      <div>
        <img alt={product.name} src={oneStyleImg} onClick={() => { updateOverviewProduct(product.id) }}></img>
        <div>
          {inOutfit
          ? <i onClick={handleCloseClick} className="far fa-window-close starIcon"></i>
          : <i onClick={()=> popupModal(product)} className="far fa-star starIcon"></i>}
        </div>
      </div>
      <section>
        <p>{product.category}</p>
        <h3>{product.name}</h3>
        {salePrice ?
          <div>
            <div className='red'>{salePrice}</div>
            <div style={{ 'text-decoration': 'line-through' }}>$ {originalPrice}</div>
          </div>
          :
          <div>$ {originalPrice}</div>
        }
        <div>Star Rating</div>
      </section>
    </div>
  )
};

export default RelatedProduct;