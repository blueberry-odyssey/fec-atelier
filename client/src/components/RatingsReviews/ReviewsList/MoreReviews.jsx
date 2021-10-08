import React from 'react';

export default class MoreReviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalReviews: [],
      currentReviews: []
    }
  }

  static getDerivedStateFromProps(props, state) {
    return {
      totalReviews: props.totalReviews,
      currentReviews: props.reviews
    };
    return null;
  }

  render() {
    if (this.state.totalReviews.length <= 2 || this.state.totalReviews.length - this.state.currentReviews.length === 0) {
      return (
        <div>
        </div>
      )
    } else {
      return (
        <button className='more-reviews-btn' onClick={()=>this.props.getReviews()}>More Reviews</button>
      )
    }
  }
}
