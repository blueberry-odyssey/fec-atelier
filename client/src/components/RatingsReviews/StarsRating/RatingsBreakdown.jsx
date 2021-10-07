import React from 'react';
import Characteristics from './Characteristics.jsx';
import StarsRating from './StarsRating.jsx';

export default class RatingsBreakdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recommended: props.recommended,
      five: 0,
      four: 0,
      three: 0,
      two: 0,
      one: 0
    };
    console.log('Ratings props:', props);
  }

  static getDerivedStateFromProps(props, state) {
    return {
      recommended: props.recommended,
      five: Number(props.totalRatings['5']),
      four: Number(props.totalRatings['4']),
      three: Number(props.totalRatings['3']),
      two: Number(props.totalRatings['2']),
      one: Number(props.totalRatings['1'])
    };
    return null;
  }

  render() {
    console.log(this.state);

    return (
      <div className='stars-column'>
        <p className='stars-rating'>{this.props.ratings}&nbsp;</p>
        <StarsRating ratings={this.props.ratings} />
        <p className='stars-recommend'>{this.state.recommended}% of reviews recommend this product</p>
        <p onClick={()=>this.props.filterReviews(5)}>5 stars &nbsp; {this.state.five}</p>
        <p onClick={()=>this.props.filterReviews(4)}>4 stars &nbsp; {this.state.four}</p>
        <p onClick={()=>this.props.filterReviews(3)}>3 stars &nbsp; {this.state.three}</p>
        <p onClick={()=>this.props.filterReviews(2)}>2 stars &nbsp; {this.state.two}</p>
        <p onClick={()=>this.props.filterReviews(1)}>1 stars &nbsp; {this.state.one}</p>
        <br />
        <Characteristics {...this.props} />
      </div>
    )
  }
}