import React from 'react';
import PropTypes from 'prop-types';
import StarRating from './StarRating.jsx';
import ItemDetails from './ItemDetails.jsx';
import Price from './Price.jsx';

const ProductInfo = function (props) {
  console.log('ProductInfo props product_id', props);
  return (
    <div>
      <h2>Product Information: </h2>
      <StarRating />
      <ItemDetails />
      <Price />

    </div>
  );
}

ProductInfo.propTypes = {
  product_id: PropTypes.string.isRequired
};

export default ProductInfo;