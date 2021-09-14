import React from 'react';
import StarRating from './StarRating.jsx';
import ItemDetails from './ItemDetails.jsx';
import Price from './Price.jsx';

const ProductInfo = function () {
  console.log('ProductInfo component invocked!');
  return (
    <div>
      <h2>Product Information: </h2>
      <StarRating />
      <ItemDetails />
      <Price />

    </div>
  );
}

export default ProductInfo;