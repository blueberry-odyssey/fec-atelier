import React from 'react';
import PropTypes from 'prop-types';
import StarRating from './StarRating.jsx';
import ItemDetails from './ItemDetails.jsx';
import Price from './Price.jsx';

const ProductInfo = function (props) {
  console.log('ProductInfo props product_id', props);
  return (
    <div>
      <StarRating />
      <ItemDetails category={props.productData.category} name={props.productData.name} description={props.productData.description} />
      <Price />

    </div>
  );
}

// ProductInfo.propTypes = {
//   productData: PropTypes.object.isRequired
// };

export default ProductInfo;