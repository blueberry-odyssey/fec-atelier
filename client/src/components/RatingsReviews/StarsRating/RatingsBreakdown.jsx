import React from 'react';
import Characteristics from './Characteristics.jsx';
import StarsRating from './StarsRating.jsx';

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
    //console.log('Ratings props:', props);
    this.addRatingFilters = this.addRatingFilters.bind(this);
  }

  // componentDidUpdate(prevProps, prevState) {
  //   console.log('updated STATE', this.state.filters.join(', '));
  //   if (prevState.filters !== this.state.filters) {
  //     if (this.state.filters.length > 0) {
  //       this.setState({
  //         filtersApplied: this.state.filters.join(', ')
  //       });
  //     }
  //   }
  // }

  static getDerivedStateFromProps(props, state) {
    return {
      recommended: props.recommended,
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
      //console.log('filters', filters);
      this.state.filters.push(val)
      //console.log('UPDATED FILTERS', this.state.filters);
      this.props.addFilters(this.state.filters);
    } else if (filters.includes(val)) {
      let index = filters.indexOf(val);
      //console.log('INDEX', index);
      filters.splice(index, 1);
      //console.log('REMOVED FILTERS', filters);
      this.setState({
        filters: filters
      })
      this.props.addFilters(filters);
    }
  }

  removeAllFilters() {
    this.setState({
      filters: []
    });
    this.props.removeFilters();
  }

  render() {

    return (
      <div className='stars-column'>
        <p className='stars-rating'>{this.props.ratings}&nbsp;</p>
        <StarsRating ratings={this.props.ratings} />
        <p className='stars-recommend'>{this.state.recommended}% of reviews recommend this product</p>
        <p className='rating-breakdown-header'>Rating Breakdown</p>
        <p className='rating-filters-applied'>Filters applied: {this.state.filtersApplied.length > 0 ? this.state.filters.join(', ') : 'none'}</p>
        <button className='remove-rating-filters-btn' onClick={()=>{this.removeAllFilters()}}>Remove all filters</button>
        <p onClick={()=>this.addRatingFilters(5)}>5 stars &nbsp; {this.state.five}</p>
        <p onClick={()=>this.addRatingFilters(4)}>4 stars &nbsp; {this.state.four}</p>
        <p onClick={()=>this.addRatingFilters(3)}>3 stars &nbsp; {this.state.three}</p>
        <p onClick={()=>this.addRatingFilters(2)}>2 stars &nbsp; {this.state.two}</p>
        <p onClick={()=>this.addRatingFilters(1)}>1 stars &nbsp; {this.state.one}</p>
        <br />
        <Characteristics {...this.props} />
      </div>
    )
  }
}