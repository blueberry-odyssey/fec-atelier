import React from 'react';
import AddReview from './AddReview.jsx';
import Characteristics from './Characteristics.jsx';
import ReviewsList from './ReviewsList.jsx';
import StarsRating from './StarsRating.jsx';

class RatingsReviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    // state would hold:
    // - metadata
    // - sort option (relevance, newest, helpful)
    // - product id
    // - number of reviews shown
  }

  render () {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>RATINGS & REVIEWS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><StarsRating /><br /><Characteristics /></td>
              <td><ReviewsList /></td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }

};

export default RatingsReviews;