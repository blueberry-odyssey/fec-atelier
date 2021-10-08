import React from 'react';
import axios from 'axios';
import ReviewBlock from './ReviewBlock.jsx';
import MoreReviews from './MoreReviews.jsx';
import ReviewForm from './ReviewForm.jsx';
import SortDropdown from './SortDropdown.jsx';


export default class ReviewsList extends React.Component {

  constructor(props) {
    super(props);
    console.log('reviews list props:', props);
    this.state = {
      id: props.id,
      productData: props.productData
    };

    this.sortReviews = this.sortReviews.bind(this);
    this.reportReview = this.reportReview.bind(this);
    this.markHelpful = this.markHelpful.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.productData !== this.props.productData) {
      this.setState({ productData: this.props.productData });
    }
  }

  sortReviews(e) {
    this.props.getReviews(e.target.value);
  }

  reportReview(reviewId) {
    let params = { reviewId };

    this.setState({
      reportDisabled: true
    })

    axios.put('/reviews/report', { params })
      .then(result => { console.log('client reportReview success', result.status); })
      .catch(err => { console.log(err); });
  }

  markHelpful(reviewId) {
    let params = { reviewId };

    axios.put('/reviews/helpful', { params })
      .then(result => { console.log('client markHelpful success:', result.status); })
      .catch(err => { console.log(err); });
  }

  render() {
    //console.log('reviews list props:', props);
    return (
      <div className='reviews-column'>
        <p>{this.props.reviews.length} reviews, sorted by: &nbsp;<SortDropdown sortReviews={this.sortReviews}/></p>
        <ReviewBlock
          reviews={this.props.reviews}
          markHelpful={this.markHelpful}
          reportReview={this.reportReview}/>
        <MoreReviews
          id={this.props.id}
          reviews={this.props.reviews}
          totalReviews={this.props.totalReviews}
          getReviews={this.props.getReviews}/>
        <ReviewForm
          id={this.props.id}
          characteristics={this.props.characteristics}
          productData={this.props.productData}
          getAllReviews={this.props.getAllReviews}/>
      </div>
    )
  }
};