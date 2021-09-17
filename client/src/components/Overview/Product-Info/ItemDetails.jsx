import React from 'react';
import PropTypes from 'prop-types';


const ItemDetails = function (props) {
  return (
    <div>
      <p className='category'>{props.category}</p>
      <p className='product-name'>{props.name}</p>
      <p className='product-description'>{props.description}</p>
    </div>
  )

}

// ItemDetails.propTypes = {
//   category: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   description: PropTypes.string.isRequired
// };

export default ItemDetails;