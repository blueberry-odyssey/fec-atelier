import React from 'react';
import axios from 'axios';
import ReviewBlock from '../ReviewBlock/ReviewBlock.jsx';
import AddReview from '../AddReview/AddReview.jsx';
import MoreReviews from '../MoreReviews/MoreReviews.jsx';

const ReviewsList = (props) => {

  return (
    <div>
      <p>(total number) reviews, sorted by (drop down menu to filter)</p><br/>
      <ReviewBlock />
      <table>
        <tbody>
          <tr>
            <td><MoreReviews /></td>
            <td><AddReview /></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
};

export default ReviewsList;
