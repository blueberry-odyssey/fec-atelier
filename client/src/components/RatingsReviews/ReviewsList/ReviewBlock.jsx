import React from 'react';

const ReviewBlock = (props) => {
  //console.log('review block props', props);

  return (
    <div>
      REVIEW BLOCK<br />
      <button id='review-helpful' onClick={props.markHelpful}>Helpful</button>
      <button id='review-report' onClick={props.reportReview}>Report</button>
    </div>
  )
}

export default ReviewBlock;






{/* <div>
      {props.reviews.map(review => (
        <div key={review.review_id} id='review-block'>
          <table>
            <tbody>
              <tr>
                <td id='review-rating'>{review.rating} stars</td>
                <td id='review-username-date'>{review.reviewer_name}, {review.date}</td>
              </tr>
              <tr>
                <td id='review-summary'>{review.summary}</td>
              </tr>
              <tr>
                <td id='review-body'>{review.body}</td>
              </tr>
              <tr>
                <td>
                  <button id='review-helpful' onClick={props.markHelpful}>Helpful</button>
                  <button id='review-report' onClick={props.reportReview}>Report</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      ))}
    </div> */}
