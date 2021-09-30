import React from 'react';
import Characteristics from './Characteristics.jsx';

export default class StarsRating extends React.Component {
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
    //console.log('STARS Reviews:', props.reviews);
    this.calculateRatings = this.calculateRatings.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.recommended !== this.props.recommended) {
      this.setState({
        recommended: this.props.recommended
      });
    }
    //console.log('STARS UPDATE', this.props);
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
    console.log('number of reviews', length);

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
        <div className='stars-block'>
          <h2 className='stars-rating'>{this.props.ratings} Stars&nbsp;&nbsp;
            <i className="fas fa-star fa-sm"></i>
            <i className="fas fa-star fa-sm"></i>
            <i className="fas fa-star fa-sm"></i>
            <i className="fas fa-star fa-sm"></i>
            <i className="fas fa-star fa-sm"></i>
          </h2>
          <p className='stars-recommend'>{this.state.recommended}% of reviews recommended this product</p>
          <p>5 stars &nbsp; {this.state.five}</p>
          <p>4 stars &nbsp; {this.state.four}</p>
          <p>3 stars &nbsp; {this.state.three}</p>
          <p>2 stars &nbsp; {this.state.two}</p>
          <p>1 stars &nbsp; {this.state.one}</p>
        </div><br />
        <Characteristics {...this.props} />
      </div>
    )
  }
}
