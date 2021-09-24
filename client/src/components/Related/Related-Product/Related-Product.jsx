import React, { useState, useEffect } from 'react';
import './Related-Product.css'
import ModalPopup from '../Modal-Popup/Modal-Popup.jsx'
import UpdatedComponent from '../../interactions.jsx'

function RelatedProduct(props) {
  const {
    inOutfit,
    display,
    showModal,
    product,
    styleData,
    updateOverviewProduct,
    overviewCharacteristics
  } = props;
  var closeOrStar = <i onClick={handleStarClick} id="starIcon" className="far fa-star"></i>;
  const [displayOne, setDisplayOne] = useState(false);
  if (inOutfit) {
    closeOrStar = <i onClick={handleCloseClick} id="starIcon" className="far fa-window-close"></i>
  }
  // useEffect(() => {
  //   let carousel = document.querySelector('.carousel');
  //   if (carousel.style.transform === 'none') {
  //     setDisplayOne(true);
  //   }
  //   let overlay = document.querySelector('#app');
  //   overlay.addEventListener('click', modalClose);
  // }, [display])

  let oneStyleImg, originalPrice;
  let salePrice = null;
  if (styleData) {
    console.log(styleData)
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

  const modalClose = () => {
    console.log('trying to close')
    setDisplayOne(false)
    let overlay = document.querySelector('#app');
    overlay.style.backgroundColor = 'rgb(0, 0, 0, 0)';
    overlay.removeEventListener('click', modalClose);
    showModal();
  }

  const handleStarClick = () => {
    showModal();
    setDisplayOne(true);
    let overlay = document.querySelector('#app');
    overlay.addEventListener('click', modalClose);
  }

  const handleCloseClick = () => {
    window.localStorage.removeItem(this.props.key)
    window.localStorage.removeItem(this.props.key + 1)
    this.props.showOutfits();
  }

  // onClick={() => { updateOverviewProduct(product.id) }}>
  return (
    <div className='each-product' onClick={() => { updateOverviewProduct(product.id) }}>
      <div>
        <img src={oneStyleImg}></img>
        <div>
          {closeOrStar}
        </div>
        <ModalPopup
          show={display && displayOne}
          product={product}
          overviewCharacteristics={overviewCharacteristics} />
      </div>
      <section>
        <p>{product.category}</p>
        <h3>{product.name}</h3>
        {salePrice ?
          <div>
            <div id='red'>{salePrice}</div>
            <div style={{ 'text-decoration': 'line-through' }}>{originalPrice}</div>
          </div>
          :
          <div>{originalPrice}</div>
        }
        <div>Star Rating</div>
      </section>
    </div>
  )
};

export default RelatedProduct;