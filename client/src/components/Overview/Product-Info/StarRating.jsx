import React from 'react';
import StarRatingReview from '../../RatingsReviews/StarsRating/StarsRating.jsx';

//will contain an array of outlined/solid stars
//and a link to 'Read all ${#} Reviews' which will scroll the page to Reviews and Ratings
const StarRating = function (props) {
  //just filler stars, no JS functionality
  return (
    <div className='overview-rating'>
      <StarRatingReview ratings={props.ratings} />
      {
        props.totalReviews.length > 0 &&
        <div className='overview-rating-link'><a href="#reviews">Read {props.totalReviews.length} reviews</a></div>
      }

    </div>
  )
}

export default StarRating;