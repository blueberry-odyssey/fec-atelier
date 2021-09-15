import React from 'react';
import axios from 'axios';
import $ from 'jquery';
import ReviewsList from './ReviewsList/ReviewsList.jsx';
import StarsRating from './StarsRating/StarsRating.jsx';

class RatingsReviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 47421,
      metadata: null,
      sort: '',
      count: 0,
      reviews: null
    };
    // state would hold:
    // - metadata
    // - sort option (relevance, newest, helpful)
    // - product id
    // - number of reviews shown

    // bind class methods here
    this.getReviews = this.getReviews.bind(this);
    this.getMetadata = this.getMetadata.bind(this);
    this.postReview = this.postReview.bind(this);
    this.reportReview = this.reportReview.bind(this);
    this.markHelpful = this.markHelpful.bind(this)
;  }

  componentDidMount() {
    //invoke getReviews
    this.getReviews();
  }

  componentDidUpdate() {
    //invoke getReviews
  }

  getReviews() {
    // make get request to get 2 reviews at first load
    // try to make it as a multi-functioning request
    // if state already has reviews, get 5 more instead of 2
    $.ajax({
      method: 'GET',
      url: '/reviews',
      data: {
        product_id: this.state.id,
        sort: this.state.sort,
        count: this.state.count
      },
      success: (data) => {
        console.log('client getReviews success:', data);
      }
    })
  }

  getMetadata() {
    $.ajax({
      method: 'GET',
      url: '/reviews/meta',
      data: {
        product_id: this.state.id
      },
      success: (data) => {
        console.log('client getMetadata success:', data);
      }
    })
  }

  postReview() {
    // invoked when add review button is clicked
    // should have a form page pop up to grab body params
    // pass body params into post request
    // add review in api, but does it need to render immediately?
    $.ajax({
      method: 'POST',
      url: '/reviews',
      data: {},
      success: (data) => {
        console.log('client postReview success:', data);
      }
    })
  }

  reportReview() {
    // make put request to report a review
    $.ajax({
      method: 'PUT',
      url: '/reviews/' + this.state.id + '/report',
      success: (data) => {
        console.log('client reportReview success:', data);
      }
    })
  }

  markHelpful() {
    // make put request to mark a review as helpful
    // should change the # of 'yes' for helpful
    $.ajax({
      method: 'PUT',
      url: '/reviews/' + this.state.id + '/helpful',
      success: (data) => {
        console.log('client markHelpful success:', data);
      }
    })
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
              <td><StarsRating id={this.state.id} /></td>
              <td><ReviewsList id={this.state.id} /></td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }

};

export default RatingsReviews;