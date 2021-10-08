import React from 'react';
import downArrow from './downArrow.svg';

const DetailBarScale = (props) => {

  let divArrowStyle = {
    width: 100
  }

  return (
    <div className='detail-bar-gray'>
      <div className='detail-arrow-bar' style={divArrowStyle}></div>
      <img className='detail-arrow' src={downArrow} />
    </div>
  )
}

export default DetailBarScale;