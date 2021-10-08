import React from 'react';
import Date from './Date.jsx';
import ImageThumbnails from './ImageThumbnails.jsx';
import Recommend from './Recommend.jsx';
import Response from './Response.jsx';
import Body from './Body.jsx';
import Helpful from './Helpful.jsx';
import Report from './Report.jsx';
import StarsRating from '../StarsRating/StarsRating.jsx';

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
                    <Helpful markHelpful={props.markHelpful} reviewId={review.review_id} helpfulness={review.helpfulness}/></p>
                    <span> | &nbsp;</span>
                    <Report reportReview={props.reportReview} reviewId={review.review_id}/>
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
