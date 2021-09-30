import React from 'react';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import { FaArrowAltCircleLeft } from 'react-icons/fa';

//props.images is an array of object with url and thumbnail url
const ImageSlider = function ({ images }) {
  return (
    <div>
      <FaArrowAltCircleLeft className='gallery-leftBtn' />
      <FaArrowAltCircleRight className='gallery-rightBtn' />
      {images.map(function (image, index) {
        return (<img src={image.url} key={index}></img>)
      })}
    </div>
  )
}

export default ImageSlider;