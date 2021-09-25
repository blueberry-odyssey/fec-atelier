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
      productData: props.productData
    };

    //this.sortReviews = this.sortReviews.bind(this);
    //this.postReview = this.postReview.bind(this);
    this.reportReview = this.reportReview.bind(this);
    this.markHelpful = this.markHelpful.bind(this);
  }

  // sortReviews() {
  // }

  componentDidUpdate(prevProps) {
    if(prevProps.productData !== this.props.productData) {
      this.setState({productData: this.props.productData});
    }
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

          <p>{this.state.reviews.length} reviews, sorted by: &nbsp;
          <select className='sort-dropdown'>
            <option>Relevance</option>
            <option>Helpfulness</option>
            <option>Newest</option>
          </select></p><br/>
          <ReviewBlock reviews={this.state.reviews} reportReview={this.reportReview} markHelpful={this.markHelpful} />
          <table>
            <tbody>
              <tr>
                <td><MoreReviews id={this.state.id}/></td>
                <td><ReviewForm id={this.state.id} characteristics={this.state.characteristics} productData={this.state.productData}/></td>
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
              <td><ReviewForm id={this.state.id} characteristics={this.state.characteristics} productData={this.state.productData}/></td>
            </tr>
          </tbody>
        </table>
      </div>
      )
    }
  }
};

{/*
  <button onClick={this.reportReview}>Report Test</button>
  <button onClick={this.markHelpful}>Helpful Test</button>
  <button onClick={this.postReview}>Post Review Test</button>
  <br />
*/}