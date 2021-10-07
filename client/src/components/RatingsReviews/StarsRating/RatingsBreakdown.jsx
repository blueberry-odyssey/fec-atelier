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
    //console.log('Ratings props:', props);
    this.calculateRatings = this.calculateRatings.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.setState({ recommended: this.props.recommended });
    }
  }

  componentDidMount() {
    if (this.props.reviews.length > 0) {
      this.calculateRatings();
    }
  }

  calculateRatings() {
    let reviews = this.props.reviews;
    let length = this.props.reviews.length;
    reviews.map(review => {
      if (review.rating === 5) {
        this.state.five += 1;
      } else if (review.rating === 4) {
        this.state.four += 1;
      } else if (review.rating === 3) {
        this.state.three += 1;
      } else if (review.rating === 2) {
        this.state.two += 1;
      } else if (review.rating === 1) {
        this.state.one += 1;
      }
    });

    this.setState({
      five: (this.state.five / length).toFixed(2),
      four: (this.state.four / length).toFixed(2),
      three: (this.state.three / length).toFixed(2),
      two: (this.state.two / length).toFixed(2),
      one: (this.state.one / length).toFixed(2)
    });
  }

  render() {
    return (
      <div className='stars-column'>
        <p className='stars-rating'>{this.props.ratings}&nbsp;</p>
        <StarsRating ratings={this.props.ratings} />
        <p className='stars-recommend'>{this.state.recommended}% of reviews recommended this product</p>
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