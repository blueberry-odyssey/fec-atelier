import React from 'react';
import axios from 'axios';
import ReviewBlock from './ReviewBlock.jsx';
import MoreReviews from './MoreReviews.jsx';
import ReviewForm from './ReviewForm.jsx';

export default class ReviewsList extends React.Component {

  constructor(props) {
    super(props);
    //console.log('reviews list props:', props);
    this.state = {
      id: props.id,
      sort: null,
      count: 0,
      reviews: props.reviews,
      characteristics: props.characteristics,
      getReviews: props.getReviews
    };

    this.selectSort = this.selectSort.bind(this);
    this.sortReviews = this.sortReviews.bind(this);
    this.postReview = this.postReview.bind(this);
    this.reportReview = this.reportReview.bind(this);
    this.markHelpful = this.markHelpful.bind(this);
  }

  componentDidMount() {

  }

  componentDidUpdate() {

  }

  selectSort() {

  }

  sortReviews() {
    let params = {
      product_id: this.state.id,
      sort: this.state.sort
    };

    axios.get('/reviews/getAllReviews', { params })
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

  postReview(e) {
    e.preventDefault();

    let params = {
      product_id: this.state.id,
      rating: 5,
      summary: 'I\'m testing postReview',
      body: 'If you see this, you did it!',
      recommend: true,
      name: 'bhbh1234',
      email: 'bhbh1234@yahoo.com',
      // photos: [],
      characteristics: {
        '159159': 5,
        '159160': 5,
        '159161': 5,
        '159162': 5
      }
    };

    axios.post('/reviews/postReview', { params })
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
          <button onClick={this.postReview}>Post Review Test</button>
          <p>{this.state.reviews.length} reviews, sorted by:
          <select>
            <option>Relevance</option>
            <option>Helpfulness</option>
            <option>Newest</option>
          </select></p><br/>
          <ReviewBlock reviews={this.state.reviews} reportReview={this.reportReview} markHelpful={this.markHelpful} />
          <table>
            <tbody>
              <tr>
                <td><MoreReviews id={this.state.id}/></td>
                <td><ReviewForm id={this.state.id} postReview={this.postReview}/></td>
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
              <td><ReviewForm id={this.state.id} postReview={this.postReview}/></td>
            </tr>
          </tbody>
        </table>
      </div>
      )
    }
  }
};

{/* <button onClick={this.reportReview}>Report Test</button>
          <button onClick={this.markHelpful}>Helpful Test</button>
          <button onClick={this.postReview}>Post Review Test</button>
          <br /> */}