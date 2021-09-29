import React from 'react';

const ReviewBlock = (props) => {
  console.log('review block props', props);

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
                  <td>
                    <button className='review-helpful-btn' onClick={()=>{props.markHelpful(review.review_id)}}>Helpful? </button>
                    <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
                    <button className='review-report-btn' onClick={()=>{props.reportReview(review.review_id)}}>Report</button>
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










    // <div className='review-block'>
    //   <p>REVIEW BLOCK MOCK-UP</p><br/>
    //   <i className="fas fa-star fa-sm"></i>
    //   <i className="fas fa-star fa-sm"></i>
    //   <i className="fas fa-star fa-sm"></i>
    //   <i className="fas fa-star fa-sm"></i>
    //   <i className="fas fa-star fa-sm"></i>
    //   <p className='review-username-date'>Username1234, September 20, 2021</p><br/>
    //   <p className='review-summary'>Title: Best purchase ever!</p><br/>
    //   <p className='review-body'>Body: Why did you like the product or not?</p><br/>
    //   <p className='review-recommend'><i className="fas fa-check fa-sm"></i> I recommend this product</p><br/>
    //   <button className='review-helpful-btn' onClick={props.markHelpful}>Helpful</button>
    //   <button className='review-report-btn' onClick={props.reportReview}>Report</button>
    // </div>