import React from 'react';
import ImageThumbnails from './ImageThumbnails.jsx';
import Recommend from './Recommend.jsx';

const ReviewBlock = (props) => {
  //console.log('review block props', props);
  // console.log('review date check', typeof(props.reviews[0].date));
  // let reviews = props.reviews;
  // reviews.map(review => {
  //   //let date = review.date.toISOString();
  //   review.date = date.slice(0, 10);
  // });

  if (props.reviews.length > 0) {
    return (
      <div className='review-list' >
        {props.reviews.map(review => (
          <div key={review.review_id} className='review-block'>
            <table>
              <tbody>
                <tr>
                  <td className='review-rating'>{review.rating} stars</td>
                  <td className='review-username-date'>{review.reviewer_name}, {review.date}</td>
                </tr>
                <tr>
                  <td className='review-summary'>{review.summary}</td>
                </tr>
                <tr>
                  <td className='review-body'>{review.body}</td>
                </tr>
                <tr>
                  <td><ImageThumbnails photos={review.photos}/></td>
                </tr>
                <tr>
                  <td><Recommend recomm={review.recommend}/></td>
                </tr>
                <tr>
                  <td>
                    <p className='review-helpful-link'>Helpful?&nbsp;<a onClick={()=>props.markHelpful(review.review_id)}>Yes</a> ({review.helpfulness})</p>
                    <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
                    <p className='review-report-link'><a onClick={()=>props.reportReview(review.review_id)}>Report</a></p>
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

export default ReviewBlock;
