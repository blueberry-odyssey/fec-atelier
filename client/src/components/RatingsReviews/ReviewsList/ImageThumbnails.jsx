import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#app');

const ImageThumbnails = (props) => {

  const [expanded, imageExpanded] = useState(false);

  if (props.photos.length > 0) {
    return (
      <div className='review-block-images'>
        {props.photos.map(image => (
          <div key={image.id}>
          <img className='review-block-photo' key={image.id} src={image.url} onClick={()=>{imageExpanded(true)}}></img>
          <Modal isOpen={expanded}>
            <img key={image.id} src={image.url} onClick={()=>{imageExpanded(false)}}></img>
          </Modal>
          </div>
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