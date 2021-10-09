import React from 'react';
import Characteristics from './Characteristics.jsx';
import StarsRating from './StarsRating.jsx';
import RatingBarScale from './RatingBarScale.jsx';

export default class RatingsBreakdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recommended: props.recommended,
      filters: [],
      filtersApplied: 'none',
      five: 0,
      four: 0,
      three: 0,
      two: 0,
      one: 0
    };
    this.addRatingFilters = this.addRatingFilters.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.id !== this.props.id) {
      this.setState({
        filters: [],
        filtersApplied: 'none',
        recommended: this.props.recommended
      });
    }
  }

  static getDerivedStateFromProps(props, state) {
    return {
      five: Number(props.totalRatings['5']) || 0,
      four: Number(props.totalRatings['4']) || 0,
      three: Number(props.totalRatings['3']) || 0,
      two: Number(props.totalRatings['2']) || 0,
      one: Number(props.totalRatings['1']) || 0
    };
    return null;
  }

  addRatingFilters(val) {
    let filters = this.state.filters;
    if (!filters.includes(val) || filters.length === 0) {
      this.state.filters.push(val)
      this.props.addFilters(this.state.filters);
    } else if (filters.includes(val)) {
      let index = filters.indexOf(val);
      filters.splice(index, 1);
      this.setState({ filters: filters });
      this.props.addFilters(filters);
    }
  }

  removeAllFilters() {
    this.setState({ filters: [] });
    this.props.removeFilters();
  }

  render() {
    return (
      <div className='stars-column'>
        <p className='stars-rating'>{this.props.ratings}&nbsp;</p>
        <StarsRating ratings={this.props.ratings} />
        <p className='stars-recommend'>{this.props.recommended ? this.props.recommended : 0}% of reviews recommend this product</p>
        <p className='rating-breakdown-header'>Rating Breakdown</p>
        <p className='rating-filters-applied'>Filters applied: {this.state.filters.length === 0 ? this.state.filtersApplied : this.state.filters.join(', ')}</p>
        <button className='remove-rating-filters-btn' onClick={()=>{this.removeAllFilters()}}>Remove all filters</button><br/>
        <p className='star-rating' onClick={()=>this.addRatingFilters(5)}>5 stars &nbsp; </p>
        <RatingBarScale rating={this.state.five} total={this.props.totalRatings}/><br/>
        <p className='star-rating' onClick={()=>this.addRatingFilters(4)}>4 stars &nbsp; </p>
        <RatingBarScale rating={this.state.four} total={this.props.totalRatings}/><br/>
        <p className='star-rating' onClick={()=>this.addRatingFilters(3)}>3 stars &nbsp; </p>
        <RatingBarScale rating={this.state.three} total={this.props.totalRatings}/><br/>
        <p className='star-rating' onClick={()=>this.addRatingFilters(2)}>2 stars &nbsp; </p>
        <RatingBarScale rating={this.state.two} total={this.props.totalRatings}/><br/>
        <p className='star-rating' onClick={()=>this.addRatingFilters(1)}>1 stars &nbsp; </p>
        <RatingBarScale rating={this.state.one} total={this.props.totalRatings}/><br/>
        <br />
        <Characteristics characteristics={this.props.characteristics} />
      </div>
    )
  }
}