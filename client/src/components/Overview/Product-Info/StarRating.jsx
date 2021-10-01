import React from 'react';

//will contain an array of outlined/solid stars
//and a link to 'Read all ${#} Reviews' which will scroll the page to Reviews and Ratings
const StarRating = function (props) {
  //just filler stars, no JS functionality
  return (
    <div className='overview-rating'>
      <div>
        <span className="fa fa-star"></span>
        <span className="fa fa-star"></span>
        <span className="fa fa-star"></span>
        <span className="fa fa-star"></span>
        <span className="fa fa-star"></span>
      </div>

      <div className='overview-rating-link'><a href="#reviews">Read all reviews</a></div>

    </div>
  )
}

export default StarRating;