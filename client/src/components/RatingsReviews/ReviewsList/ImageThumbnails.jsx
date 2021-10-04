import React from 'react';

const ImageThumbnails = (props) => {
  if (props.photos.length > 0) {
    return (
      <div className='review-block-images'>
        {props.photos.map(image => (
          <img className='review-block-photo' key={image.id} src={image.url}></img>
        ))}
      </div>
    )
  } else {
    return (
      <>
      </>
    )
  }
}

export default ImageThumbnails;