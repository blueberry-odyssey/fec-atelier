import React from 'react';
import $ from 'jquery';
import ReviewsList from './ReviewsList/ReviewsList.jsx';
import StarsRating from './StarsRating/StarsRating.jsx';

export default class RatingsReviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 47421,
      characteristics: null,
      ratings: null,
      recommended: null
    };
    this.getMetadata = this.getMetadata.bind(this);
  }

  componentDidMount() {
    this.getMetadata();
  }

  getMetadata() {
    $.ajax({
      method: 'GET',
      url: '/reviews/meta/getMeta',
      data: {
        product_id: this.state.id
      },
      success: (data) => {
        console.log('client getMetadata success:', data);
        this.setState({
          characteristics: data.characteristics,
          ratings: data.ratings,
          recommended: data.recommended
        });
      }
    })
  }

  render () {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>RATINGS & REVIEWS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><StarsRating id={this.state.id} /></td>
              <td><ReviewsList id={this.state.id} characteristics={this.state.characteristics}/></td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }

};
