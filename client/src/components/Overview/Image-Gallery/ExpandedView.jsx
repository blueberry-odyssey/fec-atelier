import React from 'react';
import ThumbnailSlider from './ThumbnailSlider.jsx';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import { FaArrowAltCircleLeft } from 'react-icons/fa';

const ExpandedView = function (props) {
  return (
    <>
      <button onClick={props.closeView}>X</button>
      <div>
        <FaArrowAltCircleLeft className='gallery-leftBtn' onClick={props.prevImage} />
        <FaArrowAltCircleRight className='gallery-rightBtn' onClick={props.nextImage} />
        {props.images.map((image, index) => {
          if (index === props.currentIndex) {
            return (
              <img
                src={image.url}
                key={index}
                className='image-expanded'
              >
              </img>
            );
          }
        })}
      </div>

      <ThumbnailSlider
        images={props.images}
        currentIndex={props.currentIndex}
        showImageAtIndex={props.showImageAtIndex}
      />

    </>
  )


}


export default ExpandedView;