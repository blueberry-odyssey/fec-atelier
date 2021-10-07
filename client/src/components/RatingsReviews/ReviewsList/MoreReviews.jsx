import React from 'react';

export default class MoreReviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: false
    }
  }

  // disableMoreReviews() {
  //   if (this.props.reviews.at(-1) === this.props.reviews[this.props.reviews.length - 1]) {
  //     this.setState({
  //       disabled: true
  //     });
  //   }
  // }

  render() {
    return (
      <button className='more-reviews-btn' onClick={()=>this.props.getReviews()}>More Reviews</button>
    )
  }
}
