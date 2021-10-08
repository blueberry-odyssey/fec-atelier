import React, { useState, useEffect } from 'react';
import './Related-Carousel.css';
import RelatedProduct from '../Related-Product/Related-Product.jsx';
import ModalPopup from '../Modal-Popup/Modal-Popup.jsx'

export default function RelatedCarousel(
  { styleData,
    relatedItems,
    updateOverviewProduct,
    translate,
    overviewCharacteristics,
    productData }) {
    // console.log('related items', relatedItems)
  const [displayModal, setDisplay] = useState(false);
  const [modalProduct, setModalProduct] = useState({});

  useEffect(() => {
  }, [displayModal])

  let overlay = document.querySelector('#app');
  const modalClose = () => {
    setDisplay(false)
    overlay.removeEventListener('click', modalClose)
  }

  const popupModal = (modalProduct) => {
    console.log('modal popup')
    setModalProduct(modalProduct);
    setDisplay(true);
    overlay.addEventListener('click', modalClose);
  }

  return (
    <div>
      <div className='related-carousel' style={{ 'transform': `translateX(${translate}px)` }}>
        {relatedItems.map((product, idx) => {
          // console.log('we have 2 many keys', product.id)
          return <RelatedProduct
            popupModal={popupModal}
            key={idx}
            product={product}
            styleData={styleData[idx]}
            updateOverviewProduct={updateOverviewProduct}
            overviewCharacteristics={overviewCharacteristics} />
        })}
      </div>
      {displayModal && <ModalPopup
        product={modalProduct}
        overviewCharacteristics={overviewCharacteristics}
        productData={productData} />}
    </div>
  )
};