import React from 'react';

export default class OverallRating extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <p className='form-rating-header'>Overall rating <span className='form-mandatory'>*</span> </p>
        <div className='form-rating'>
          <input type="radio" id="star1" name="rating" onChange={this.props.handleInputChange} value="1" required/>
          <label htmlFor="star1" title="text"></label>
          <input type="radio" id="star2" name="rating" onChange={this.props.handleInputChange} value="2" required/>
          <label htmlFor="star2" title="text"></label>
          <input type="radio" id="star3" name="rating" onChange={this.props.handleInputChange} value="3" required/>
          <label htmlFor="star3" title="text"></label>
          <input type="radio" id="star4" name="rating" onChange={this.props.handleInputChange} value="4" required/>
          <label htmlFor="star4" title="text"></label>
          <input type="radio" id="star5" name="rating" onChange={this.props.handleInputChange} value="5" required/>
          <label htmlFor="star5" title="text"></label>
        </div>
      </>
    )
  }
}
