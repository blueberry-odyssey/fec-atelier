import React from 'react';
import ReviewsList from './ReviewsList/ReviewsList.jsx';
import StarsRating from './StarsRating/StarsRating.jsx';

export default class RatingsReviews extends React.Component {
  constructor(props) {
    super(props);
    //console.log('class ratings props:', props);
    this.state = {
      id: props.id,
      characteristics: null,
      ratings: null,
      recommended: null
    };
  }

  componentDidMount() {

  }

  render () {
    return (
      <div>
        <h2 className='reviews-header'>RATINGS & REVIEWS</h2>
        <div className='reviews-container'>
          <StarsRating {... this.state} />
          <ReviewsList id={this.state.id} characteristics={this.state.characteristics} />
        </div>
      </div>
    )
  }

};
