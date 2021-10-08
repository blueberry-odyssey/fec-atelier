import React from 'react';

export default class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      more: false
    }
  }

  render() {
    let length = this.props.body.length;

    let cropped = this.props.body.slice(0, 250);

    if (length < 250 || this.state.more === true) {
      return (
        <p className='review-body' >{this.props.body}</p>
      )
    } else {
      return (
        <>
        {cropped}
        <p className='review-show-more' onClick={()=>{this.setState({more: true})}}>Show more</p>
        </>
      )
    }
  }
}