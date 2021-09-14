import React from 'react';
import AddReview from './AddReview/AddReview.jsx';
import Characteristics from './Characteristics/Characteristics.jsx';
import ReviewsList from './ReviewsList/ReviewsList.jsx';
import StarsRating from './StarsRating/StarsRating.jsx';

class RatingsReviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 47421,
      metadata: null,
      sort: '',
      totalReviews: 0
    };
    // state would hold:
    // - metadata
    // - sort option (relevance, newest, helpful)
    // - product id
    // - number of reviews shown

    // bind class methods here
  }

  componentDidMount() {
    //invoke getReviews
  }

  componentDidUpdate() {
    //invoke getReviews
  }

  getReviews() {
    // make get request to get 2 reviews at first load
    // try to make it as a multi-functioning request
    // if state already has reviews, get 5 more instead of 2
  }

  getMoreReviews() {
    // if above idea doesn't work, make separate request
  }

  postReview() {
    // invoked when add review button is clicked
    // should have a form page pop up to grab body params
    // pass body params into post request
    // add review in api, but does it need to render immediately?
  }

  reportReview() {
    // make put request to report a review
  }

  helpfulReview() {
    // make put request to mark a review as helpful
    // should change the # of 'yes' for helpful
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
              <td><StarsRating id={this.state.id}/></td>
              <td><ReviewsList id={this.state.id} /></td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }

};

export default RatingsReviews;