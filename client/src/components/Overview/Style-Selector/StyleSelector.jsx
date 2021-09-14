import React from 'react';
import Thumbnails from './Thumbnails.jsx';

const StyleSelector = function (props) {
  return (
    <div>
      <h2>Style Selector: </h2>
      <p>Style Selected: </p>
      <Thumbnails />
    </div>
  )
}

export default StyleSelector;