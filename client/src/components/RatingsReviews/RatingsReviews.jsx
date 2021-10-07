import React from 'react';
import ReviewsList from './ReviewsList/ReviewsList.jsx';
import RatingsBreakdown from './StarsRating/RatingsBreakdown.jsx';
import UpdatedComponent from '../interactions.jsx';

class RatingsReviews extends React.Component {
  constructor(props) {
    super(props);
    //console.log('class ratings props:', props);
    this.state = {
      productData: props.productData
    };

    // this.filterReviews = this.filterReviews.bind(this);
    // this.unfilterReviews = this.unfilterReviews.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.productData !== this.props.productData) {
      this.setState({productData: this.props.productData});
    }
  }

  // filterReviews(rating) {
  //   let reviews = this.props.reviews;
  //   let filteredReviews = [];
  //   reviews.map(review => {
  //     if (review.rating === rating) {
  //       this.state.filteredReviews.push(review);
  //     }
  //   });
  //   console.log('RnR state:', this.state.filteredReviews);
  // }

  // unfilterReviews(rating) {
  //   if (this.state.filteredReviews.length > 0) {
  //     let reviews = this.state.filteredReviews;
  //     reviews.map(review => {
  //       if (review.rating === rating) {
  //         this.state.filteredReviews.slice(review, 1);
  //       }
  //     })
  //   }
  // }

  render() {
    return (
      <>
        <p className='reviews-header'>Ratings & Reviews</p>
        <div className='reviews-container'>
          <RatingsBreakdown {...this.props} />
          <ReviewsList {...this.props} />
        </div>
      </>
    )
  }
};

export default UpdatedComponent(RatingsReviews);
//export default RatingsReviews;
