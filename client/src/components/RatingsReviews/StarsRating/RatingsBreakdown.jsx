import React from 'react';
import Characteristics from './Characteristics.jsx';
import StarsRating from './StarsRating.jsx';

export default class RatingsBreakdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recommended: props.recommended,
      filters: props.ratingFilters,
      filtersApplied: 'none',
      five: 0,
      four: 0,
      three: 0,
      two: 0,
      one: 0
    };
    //console.log('Ratings props:', props);
    this.filtersApplied;
  }

  componentDidUpdate(prevProps) {
    if (prevProps.ratingFilters !== this.props.ratingFilters) {
      this.setState({
        filters: this.props.ratingFilters
      }, () => {
        if (this.state.filters.length === 0) {
          this.setState({ filtersApplied: 'none' });
        } else if (this.state.filters.length > 0) {
          let updated = this.state.filters.join(', ');
          this.setState({ filtersApplied: updated });
        }
      });
    }
  }

  static getDerivedStateFromProps(props, state) {
    return {
      recommended: props.recommended,
      filters: props.ratingFilters,
      five: Number(props.totalRatings['5']) || 0,
      four: Number(props.totalRatings['4']) || 0,
      three: Number(props.totalRatings['3']) || 0,
      two: Number(props.totalRatings['2']) || 0,
      one: Number(props.totalRatings['1']) || 0
    };
    return null;
  }

  render() {
    //console.log('ratings breakdown', this.state);

    return (
      <div className='stars-column'>
        <p className='stars-rating'>{this.props.ratings}&nbsp;</p>
        <StarsRating ratings={this.props.ratings} />
        <p className='stars-recommend'>{this.state.recommended}% of reviews recommend this product</p>
        <p className='rating-breakdown-header'>Rating Breakdown</p>
        <p className='rating-filters-applied'>Filters applied: {this.state.filtersApplied}</p>
        <button className='remove-rating-filters-btn' onClick={()=>{this.props.removeFilters()}}>Remove all filters</button>
        <p onClick={()=>this.props.addRatingFilters(5)}>5 stars &nbsp; {this.state.five}</p>
        <p onClick={()=>this.props.addRatingFilters(4)}>4 stars &nbsp; {this.state.four}</p>
        <p onClick={()=>this.props.addRatingFilters(3)}>3 stars &nbsp; {this.state.three}</p>
        <p onClick={()=>this.props.addRatingFilters(2)}>2 stars &nbsp; {this.state.two}</p>
        <p onClick={()=>this.props.addRatingFilters(1)}>1 stars &nbsp; {this.state.one}</p>
        <br />
        <Characteristics {...this.props} />
      </div>
    )
  }
}