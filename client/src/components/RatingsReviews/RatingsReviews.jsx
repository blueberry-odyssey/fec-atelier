import React from 'react';
import ReviewsList from './ReviewsList/ReviewsList.jsx';
import RatingsBreakdown from './StarsRating/RatingsBreakdown.jsx';
import UpdatedComponent from '../interactions.jsx';

class RatingsReviews extends React.Component {
  constructor(props) {
    super(props);
    // console.log('class ratings props:', props);
    this.state = {
      productData: props.productData,
      ratingFilters: []
    };

    this.addFilters = this.addFilters.bind(this);
    this.removeFilters = this.removeFilters.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.productData !== this.props.productData) {
      this.setState({productData: this.props.productData});
    }
  }

  addFilters(array) {
    this.setState({ ratingFilters: array });
  }

  removeFilters() {
    this.setState({ ratingFilters: [] });
    // console.log('remove filters success');
  }

  render() {
    return (
      <>
        <p className='reviews-header'>Ratings & Reviews</p>
        <div className='reviews-container'>
          <RatingsBreakdown
            {...this.props}
            ratingFilters={this.state.ratingFilters}
            addFilters={this.addFilters}
            removeFilters={this.removeFilters}/>
          <ReviewsList
            {...this.props}
            ratingFilters={this.state.ratingFilters}/>
        </div>
      </>
    )
  }
};

export default UpdatedComponent(RatingsReviews);
//export default RatingsReviews;
