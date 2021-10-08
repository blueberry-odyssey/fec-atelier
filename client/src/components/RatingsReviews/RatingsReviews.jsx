import React from 'react';
import ReviewsList from './ReviewsList/ReviewsList.jsx';
import RatingsBreakdown from './StarsRating/RatingsBreakdown.jsx';
import UpdatedComponent from '../interactions.jsx';

class RatingsReviews extends React.Component {
  constructor(props) {
    super(props);
    console.log('class ratings props:', props);
    this.state = {
      productData: props.productData,
      ratingFilters: []
    };

    this.addRatingFilters = this.addRatingFilters.bind(this);
    this.removeFilters = this.removeFilters.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.productData !== this.props.productData) {
      this.setState({productData: this.props.productData});
    }
  }

  addRatingFilters(val) {
    let filters = this.state.ratingFilters;
    if (!filters.includes(val) || filters.length === 0) {
      this.state.ratingFilters.push(val);
      console.log('UPDATED FILTERS', this.state.ratingFilters);
    } else if (filters.includes(val)) {
      let index = filters.indexOf(val);
      let updatedFilters = filters.slice(index, 1);

      this.setState({ ratingFilters: updatedFilters });
    }
  }

  removeFilters() {
    this.setState({ ratingFilters: [] });
    console.log('remove filters success');
  }

  render() {
    return (
      <>
        <p className='reviews-header'>Ratings & Reviews</p>
        <div className='reviews-container'>
          <RatingsBreakdown {...this.props} ratingFilters={this.state.ratingFilters} addRatingFilters={this.addRatingFilters} removeFilters={this.removeFilters}/>
          <ReviewsList {...this.props} />
        </div>
      </>
    )
  }
};

export default UpdatedComponent(RatingsReviews);
//export default RatingsReviews;
