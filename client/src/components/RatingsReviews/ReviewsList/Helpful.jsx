import React from 'react';

export default class Helpful extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      helpfulCount: props.helpfulness,
      helpfulDisabled: false
    }
  }

  render() {
    return (
      <>
      <button className='review-helpful-btn' disabled={this.state.helpfulDisabled} onClick={()=>{
        this.props.markHelpful(this.props.reviewId);
        this.setState({
          helpfulCount: this.props.helpfulness + 1,
          helpfulDisabled: true
        })
      }}>Yes</button>
      ({this.state.helpfulCount})
      </>
    )
  }
}