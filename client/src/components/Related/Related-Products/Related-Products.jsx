import React, { useState, useEffect } from 'react';
import './Related-Products.css';
import axios from 'axios';
import Carousel from '../Carousel/Carousel.jsx';
import UpdatedComponent from '../../interactions.jsx';


const RelatedProducts = function (
  {product_id,
  addOutfit,
  productData,
  updateOverviewProduct,
  overviewCharacteristics,
  invokeAddToOutfits}) {

  const [relatedItems, setRelatedItems] = useState([]);
  const [styleData, setStyleData] = useState([]);

  useEffect(() => {
    getRelatedProductsAndStyles();
  }, [product_id])

  const getRelatedProductsAndStyles = () => {
    axios.get('/products/findRelatedItems', { params: { id: product_id } })
      .then(result => {
        var productIDArray = result.data;
        axios.get('/products/relatedProductsAndStyles', { params: { productIDArray, styles: '' } })
          .then(relatedData => {
            setRelatedItems(relatedData.data);
            axios.get('/products/relatedProductsAndStyles', { params: { productIDArray, styles: '/styles' } })
              .then(styleData => {
                //console.log('relatedStyle Data', styleData);
                setStyleData(styleData.data);
              })
              .catch(err => { throw err; });
          })
          .catch(err => { throw err; });
      })
      .catch(err => { console.log(err) });
  }

  // console.log('style data in main', overviewCharacteristics);
  return (
    <div className='related'>
      <h1>related <span className='pink'>products</span></h1>
      <Carousel
        productData={productData}
        relatedItems={relatedItems}
        styleData={styleData}
        updateOverviewProduct={updateOverviewProduct}
        overviewCharacteristics={overviewCharacteristics} />
      <h1>make your fit</h1>
      <Carousel
        productData={productData}
        relatedItems={relatedItems}
        updateOverviewProduct={updateOverviewProduct}
        invokeAddToOutfits={invokeAddToOutfits}
        addOutfit={addOutfit} />
    </div>
  )
}

export default RelatedProducts