import React from 'react';
import $ from 'jquery';
import Characteristics from './Characteristics.jsx';

export default class StarsRating extends React.Component {
  constructor(props) {
    //console.log('STARS PROPS:', props);
    super(props);
    this.state = {
      id: props.id,
      characteristics: props.characteristics,
      ratings: props.ratings,
      recommended: props.recommended
    };

  }

  render() {
    return (
      <div className='stars-column'>
        <div className='stars-block'>
          <h2 className='stars-rating'>5 Stars&nbsp;&nbsp;
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
        <Characteristics {...this.state} />
      </div>
    )
  }
}
