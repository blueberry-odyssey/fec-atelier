import React from 'react';

const ThumbnailSlider = function (props) {
  // console.log(props.images, props.currentIndex);

  return (
    <div className='thumbnail-carousel'>

      <div className='thumbnail-carousel-box'>
        {props.images.map((image, index) => {
          return <img
            className={index === props.currentIndex ? 'active-thumbnail-carousel-img' : 'thumbnail-carousel-img'}
            src={image['thumbnail_url']}
            key={index}>
          </img>
        })}
      </div>




    </div>
  )
}


export default ThumbnailSlider;