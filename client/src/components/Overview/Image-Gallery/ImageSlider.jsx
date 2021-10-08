import React from 'react';
import ThumbnailSlider from './ThumbnailSlider.jsx';
import ImageThumbnailSlider from './ImageThumbnailSlider.jsx';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import { FaArrowAltCircleLeft } from 'react-icons/fa';

//props.images is an array of object with url and thumbnail url
const ImageSlider = function (props) {
  return (
    <>
      <div>
        <FaArrowAltCircleLeft className='gallery-leftBtn' onClick={props.prevImage} />
        <FaArrowAltCircleRight className='gallery-rightBtn' onClick={props.nextImage} />
        {props.images.map((image, index) => {
          if (index === props.currentIndex) {
            return (
              <img
                src={image.url}
                key={index}
                className='image'
                onClick={() => {
                  props.openView();
                }}>
              </img>
            );
          }
        })}
      </div>

      {/* <ThumbnailSlider
        images={props.images}
        currentIndex={props.currentIndex}
        showImageAtIndex={props.showImageAtIndex}
      /> */}

      <ImageThumbnailSlider
        images={props.images}
        currentIndex={props.currentIndex}
        showImageAtIndex={props.showImageAtIndex} />

    </>
  )
}

export default ImageSlider;