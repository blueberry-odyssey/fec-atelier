import React from 'react';

const Recommend = (props) => {
  if (props.recomm === true) {
    return (
      <p className='review-recommend'><i className="fas fa-check"></i>&nbsp;I recommend this product</p>
    )
  } else {
    return (
      <>
      </>
    )
  }
}

export default Recommend;