import React from 'react';
import $ from 'jquery';
import ReviewBlock from './ReviewBlock.jsx';
import AddReview from './AddReview.jsx';
import MoreReviews from './MoreReviews.jsx';

export default class ReviewsList extends React.Component {

  constructor(props) {
    super(props);
    console.log('reviews list props:', props);
    this.state = {
      id: props.id,
      sort: '',
      count: 0,
      reviews: null,
      characteristics: props.characteristics
    };

    this.getReviews = this.getReviews.bind(this);
    this.postReview = this.postReview.bind(this);
    this.reportReview = this.reportReview.bind(this);
    this.markHelpful = this.markHelpful.bind(this);
  }

  componentDidMount() {
    this.getReviews();
  }

  componentDidUpdate() {

  }

  getReviews() {
    // make get request to get 2 reviews at first load
    // try to make it as a multi-functioning request
    // if state already has reviews, get 5 more instead of 2
    $.ajax({
      method: 'GET',
      url: '/reviews/getAllReviews',
      data: {
        product_id: this.state.id
        // sort: this.state.sort,
        // count: this.state.count
      },
      success: (data) => {
        console.log('client getReviews success:', data);
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
      url: '/reviews/postReview',
      data: {
        product_id: this.state.id,
        rating: 5,
        summary: 'I\'m testing postReview',
        body: 'If you see this, you did it!',
        recommend: true,
        name: 'bhbh1234',
        email: 'bhbh1234@yahoo.com',
        photos: [],
        characteristics: this.state.characteristics
      },
      success: (data) => {
        console.log('client postReview success:', data);
      }
    })
  }

  reportReview() {
    // make put request to report a review
    $.ajax({
      method: 'PUT',
      url: '/reviews/report',
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
      url: '/reviews/helpful',
      success: (data) => {
        console.log('client markHelpful success:', data);
      }
    })
  }

  render() {
    //console.log('reviews list props:', props);
    return (
      <div>
        <button onClick={this.reportReview}>Report Test</button>
        <button onClick={this.markHelpful}>Helpful Test</button>
        <button onClick={this.postReview}>Post Review Test</button>
        <br />
        <p>(total number) reviews, sorted by (drop down menu to filter)</p><br/>
        <ReviewBlock id={this.state.id}/>
        <table>
          <tbody>
            <tr>
              <td><MoreReviews id={this.state.id}/></td>
              <td><AddReview id={this.state.id}/></td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
};

