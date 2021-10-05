import React from 'react';
import Date from './Date.jsx';
import ImageThumbnails from './ImageThumbnails.jsx';
import Recommend from './Recommend.jsx';
import Response from './Response.jsx';
import Body from './Body.jsx';
import Helpful from './Helpful.jsx';

const ReviewBlock = (props) => {
  //console.log('review block props', props);

  if (props.reviews.length > 0) {
    return (
      <div className='review-list' >
        {props.reviews.map(review => (
          <div key={review.review_id} className='review-block'>
            <table>
              <tbody>
                <tr>
                  <td className='review-rating'>{review.rating} stars</td>
                  <td className='review-username'>{review.reviewer_name}, <Date reviewDate={review.date}/></td>
                </tr>
                <tr>
                  <td className='review-summary'>{review.summary}</td>
                </tr>
                <tr>
                  <td><Body body={review.body} /></td>
                </tr>
                <tr>
                  <td><Response response={review.response}/></td>
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
                    <Helpful markHelpful={props.markHelpful} reviewId={review.review_id} helpfulness={review.helpfulness}/></p>
                    <span> | &nbsp;</span>
                    <button className='review-report-btn' disabled={props.reportDisabled} onClick={()=>props.reportReview(review.review_id)}>Report</button>
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
