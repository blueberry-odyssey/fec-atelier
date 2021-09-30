import React from 'react';
import Characteristics from './Characteristics.jsx';

export default class StarsRating extends React.Component {
  constructor(props) {
    //console.log('STARS PROPS:', props);
    let recommend = props.recommended;
    let rounded = recommend.toFixed(2);
    super(props);
    this.state = {
      recommended: rounded
    };

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
          <p>5 stars</p>
          <p>4 stars</p>
          <p>3 stars</p>
          <p>2 stars</p>
          <p>1 stars</p>
        </div><br />
        <Characteristics {...this.props} />
      </div>
    )
  }
}
