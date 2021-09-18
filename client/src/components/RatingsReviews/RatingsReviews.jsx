import React from 'react';
import ReviewsList from './ReviewsList/ReviewsList.jsx';
import StarsRating from './StarsRating/StarsRating.jsx';

export default class RatingsReviews extends React.Component {
  constructor(props) {
    super(props);
    //console.log('class ratings props:', props);
    this.state = {
      id: props.id,
      characteristics: null,
      ratings: null,
      recommended: null
    };
  }

  componentDidMount() {

  }

  render () {
    return (
      <div>
        <h2>RATINGS & REVIEWS</h2>
        <table>
          <tbody>
            <tr>
              <td><StarsRating className='stars-column' {... this.state} /></td>
              <td><ReviewsList className='reviews-column' id={this.state.id} characteristics={this.state.characteristics} /></td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }

};
