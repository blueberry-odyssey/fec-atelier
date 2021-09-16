import React from 'react';

const MoreReviews = (props) => {
  //console.log('more reviews props:', props);
  return (
    <button onClick={props.getReviews}>More Reviews</button>
  )
}

export default MoreReviews;