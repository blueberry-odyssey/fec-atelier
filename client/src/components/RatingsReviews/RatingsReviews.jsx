import React from 'react';
import ReviewsList from './ReviewsList/ReviewsList.jsx';
import StarsRating from './StarsRating/StarsRating.jsx';

export default class RatingsReviews extends React.Component {
  constructor(props) {
    super(props);
    //console.log('class ratings props:', props);
    this.state = {
      id: props.id,
      characteristics: props.characteristics,
      ratings: props.ratings,
      recommended: props.recommended,
      reviews: props.reviews,
      productData: props.productData
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.productData !== this.props.productData) {
      this.setState({productData: this.props.productData});
    }
  }

  render () {
    return (
      <div>
        <h2 className='reviews-header'>RATINGS & REVIEWS</h2>
        <div className='reviews-container'>
          <StarsRating {...this.state} />
          <ReviewsList {...this.state} />
        </div>
      </div>
    )
  }

};
