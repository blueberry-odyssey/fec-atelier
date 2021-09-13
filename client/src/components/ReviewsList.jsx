import React from 'react';
import ReviewBlock from './ReviewBlock.jsx';
import AddReview from './AddReview.jsx';
import MoreReviews from './MoreReviews.jsx';

class ReviewsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render () {
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
  }
};

export default ReviewsList;
