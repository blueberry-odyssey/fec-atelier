import React from 'react';
import axios from 'axios';
import ReviewBlock from './ReviewBlock.jsx';
import AddReview from './AddReview.jsx';
import MoreReviews from './MoreReviews.jsx';

export default class ReviewsList extends React.Component {

  constructor(props) {
    super(props);
    //console.log('reviews list props:', props);
    this.state = {
      id: props.id,
      page: 0,
      sort: '',
      count: 0,
      reviews: [],
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
    axios.get('/reviews/getAllReviews', { params: { product_id: this.state.id } })
      .then(result => {
        this.setState({
          page: result.data.page,
          count: result.data.count,
          reviews: result.data.results
        });
      })
      .catch(err => {
        throw err;
      });
  }

  postReview() {
    // invoked when add review button is clicked
    // should have a form page pop up to grab body params
    // pass body params into post request
    // add review in api, but does it need to render immediately?
    axios.post('/reviews/postReview', {
      params: {
        product_id: this.state.id,
        rating: 5,
        summary: 'I\'m testing postReview',
        body: 'If you see this, you did it!',
        recommend: true,
        name: 'bhbh1234',
        email: 'bhbh1234@yahoo.com',
        photos: [],
        characteristics: this.state.characteristics
      }
    })
      .then(result => {
        console.log('client post success', result);
      })
      .catch(err => {
        throw err;
      });
  }

  reportReview() {
    axios.put('/reviews/report')
      .then(result => {
        console.log('client reportReview success', result);
      })
      .catch(err => {
        throw err;
      });
  }

  markHelpful() {
    // make put request to mark a review as helpful
    // should change the # of 'yes' for helpful
    axios.put('/reviews/helpful')
      .then(result => {
        console.log('client markHelpful success:', result);
      })
      .catch(err => {
        throw err;
      });
  }

  render() {
    //console.log('reviews list props:', props);
    if (this.state.reviews !== null) {
      return (
        <div className='reviews-column'>
          {/* <button onClick={this.reportReview}>Report Test</button>
          <button onClick={this.markHelpful}>Helpful Test</button>
          <button onClick={this.postReview}>Post Review Test</button>
          <br /> */}
          <p>(total number) reviews, sorted by:
          <select>
            <option>Relevance</option>
            <option>Helpfulness</option>
            <option>Newest</option>
          </select></p><br/>
          <ReviewBlock className='review-block' reviews={this.state.reviews} reportReview={this.reportReview} markHelpful={this.markHelpful} />
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
    } else {
      return (
      <div className='reviews-column'>
        <p>(total number) reviews, sorted by:
        <select>
          <option>Relevance</option>
          <option>Helpfulness</option>
          <option>Newest</option>
        </select></p>
        <br/>
        <ReviewBlock reviews={this.state.reviews} reportReview={this.reportReview} markHelpful={this.markHelpful} />
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
  }
};

