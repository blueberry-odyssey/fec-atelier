import React from 'react';
import Date from './Date.jsx';
import ImageThumbnails from './ImageThumbnails.jsx';
import Recommend from './Recommend.jsx';
import Response from './Response.jsx';
import Body from './Body.jsx';
import Helpful from './Helpful.jsx';
import Report from './Report.jsx';
import StarsRating from '../StarsRating/StarsRating.jsx';

export default class ReviewBlock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: props.reviews,
      filters: props.ratingFilters
    }
    this.filterReviews = this.filterReviews.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.ratingFilters !== this.props.ratingFilters) {
      this.setState({
        filters: this.props.ratingFilters
      }, () => {
        if (this.state.filters.length > 0) {
          this.filterReviews();
        } else if (this.state.filters.length === 0) {
          this.setState({
            reviews: this.props.reviews
          });
        }
      });
    }
  }

  filterReviews() {
    if (this.state.reviews.length > 0) {
      let filtered = [];
      this.props.reviews.map(review => {
        for (var i = 0; i < this.state.filters.length; i++) {
          if (review.rating === this.state.filters[i]) {
            filtered.push(review);
          }
        }
      })
      this.setState({ reviews: filtered });
    }
  }

  render() {
    if (this.state.filters.length > 0) {
      return (
        <div className='review-list' >
          {this.state.reviews.map(review => (
            <div key={review.review_id} className='review-block'>
              <table>
                <tbody>
                  <tr>
                    <td className='review-rating'><StarsRating ratings={review.rating}/></td>
                    <td className='review-username'>{review.reviewer_name}, <Date reviewDate={review.date}/></td>
                  </tr>
                  <tr>
                    <td className='review-summary' colSpan={2}>{review.summary}</td>
                  </tr>
                  <tr>
                    <td colSpan={2}><Body body={review.body} /></td>
                  </tr>
                  <tr>
                    <td colSpan={2}><Response response={review.response}/></td>
                  </tr>
                  <tr>
                    <td><ImageThumbnails photos={review.photos}/></td>
                  </tr>
                  <tr>
                    <td><Recommend recomm={review.recommend}/></td>
                  </tr>
                  <tr>
                    <td>
                      <p className='review-helpful'>Helpful?
                      <Helpful markHelpful={this.props.markHelpful} reviewId={review.review_id} helpfulness={review.helpfulness}/></p>
                      <span> | &nbsp;</span>
                      <Report reportReview={this.props.reportReview} reviewId={review.review_id}/>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          ))}
        </div>
      )
    } else if (this.state.filters.length === 0) {
      return (
        <div className='review-list' >
          {this.props.reviews.map(review => (
            <div key={review.review_id} className='review-block'>
              <table>
                <tbody>
                  <tr>
                    <td className='review-rating'><StarsRating ratings={review.rating}/></td>
                    <td className='review-username'>{review.reviewer_name}, <Date reviewDate={review.date}/></td>
                  </tr>
                  <tr>
                    <td className='review-summary' colSpan={2}>{review.summary}</td>
                  </tr>
                  <tr>
                    <td colSpan={2}><Body body={review.body} /></td>
                  </tr>
                  <tr>
                    <td colSpan={2}><Response response={review.response}/></td>
                  </tr>
                  <tr>
                    <td><ImageThumbnails photos={review.photos}/></td>
                  </tr>
                  <tr>
                    <td><Recommend recomm={review.recommend}/></td>
                  </tr>
                  <tr>
                    <td>
                      <p className='review-helpful'>Helpful?
                      <Helpful markHelpful={this.props.markHelpful} reviewId={review.review_id} helpfulness={review.helpfulness}/></p>
                      <span> | &nbsp;</span>
                      <Report reportReview={this.props.reportReview} reviewId={review.review_id}/>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          ))}
        </div>
      )
    } else {
      return (
        <div></div>
      )
    }
  }

}

