import React from 'react';

export default class Report extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reportDisabled: false
    }
  }

  render() {
    return (
      <>
      <button className='review-report-btn'
      disabled={this.state.reportDisabled}
      onClick={()=>{
        this.props.reportReview(this.props.reviewId);
        this.setState({ reportDisabled: true });
        }}>Report</button>
      </>
    )
  }
}