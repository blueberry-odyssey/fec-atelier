import React from 'react';
import PropTypes from 'prop-types';


const ItemDetails = function (props) {
  return (
    <div>
      <h3>Item Details Component </h3>
      <p>{props.category}</p>
      <p>{props.name}</p>
      <p>{props.description}</p>
    </div>
  )

}

ItemDetails.propTypes = {
  category: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default ItemDetails;