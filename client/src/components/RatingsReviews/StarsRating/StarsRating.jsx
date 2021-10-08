import React from 'react';
import Characteristics from './Characteristics.jsx';
import emptyStar from '../ReviewsList/svg-stars/emptyStar.svg';
import oneQuarterStar from '../ReviewsList/svg-stars/oneQuarterStar.svg';
import halfStar from '../ReviewsList/svg-stars/halfStar.svg';
import threeQuarterStar from '../ReviewsList/svg-stars/threeQuarterStar.svg';
import fullStar from '../ReviewsList/svg-stars/fullStar.svg';


export default class StarsRating extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let ratings = this.props.ratings;
    let starRating = [];
    if (ratings === 0 || ratings === undefined) { starRating = [emptyStar, emptyStar, emptyStar, emptyStar, emptyStar]; }
    if (ratings > 0 && ratings <= 0.25) { starRating = [oneQuarterStar, emptyStar, emptyStar, emptyStar, emptyStar]; }
    if (ratings > 0.25 && ratings <= 0.5) { starRating = [halfStar, emptyStar, emptyStar, emptyStar, emptyStar]; }
    if (ratings > 0.5 && ratings <= 0.75) { starRating = [threeQuarterStar, emptyStar, emptyStar, emptyStar, emptyStar]; }
    if (ratings > 0.75 && ratings <= 1) { starRating = [fullStar, emptyStar, emptyStar, emptyStar, emptyStar]; }
    if (ratings > 1 && ratings <= 1.25) { starRating = [fullStar, oneQuarterStar, emptyStar, emptyStar, emptyStar]; }
    if (ratings > 1.25 && ratings <= 1.5) { starRating = [fullStar, halfStar, emptyStar, emptyStar, emptyStar]; }
    if (ratings > 1.5 && ratings <= 1.75) { starRating = [fullStar, threeQuarterStar, emptyStar, emptyStar, emptyStar]; }
    if (ratings > 1.75 && ratings <= 2) { starRating = [fullStar, fullStar, emptyStar, emptyStar, emptyStar]; }
    if (ratings > 2 && ratings <= 2.25) { starRating = [fullStar, fullStar, oneQuarterStar, emptyStar, emptyStar]; }
    if (ratings > 2.25 && ratings <= 2.5) { starRating = [fullStar, fullStar, halfStar, emptyStar, emptyStar]; }
    if (ratings > 2.5 && ratings <= 2.75) { starRating = [fullStar, fullStar, threeQuarterStar, emptyStar, emptyStar]; }
    if (ratings > 2.75 && ratings <= 3) { starRating = [fullStar, fullStar, fullStar, emptyStar, emptyStar]; }
    if (ratings > 3 && ratings <= 3.25) { starRating = [fullStar, fullStar, fullStar, oneQuarterStar, emptyStar]; }
    if (ratings > 3.25 && ratings <= 3.5) { starRating = [fullStar, fullStar, fullStar, halfStar, emptyStar]; }
    if (ratings > 3.5 && ratings <= 3.75) { starRating = [fullStar, fullStar, fullStar, threeQuarterStar, emptyStar]; }
    if (ratings > 3.75 && ratings <= 4) { starRating = [fullStar, fullStar, fullStar, fullStar, emptyStar]; }
    if (ratings > 4 && ratings <= 4.25) { starRating = [fullStar, fullStar, fullStar, fullStar, oneQuarterStar]; }
    if (ratings > 4.25 && ratings <= 4.5) { starRating = [fullStar, fullStar, fullStar, fullStar, halfStar]; }
    if (ratings > 4.5 && ratings <= 4.75) { starRating = [fullStar, fullStar, fullStar, fullStar, threeQuarterStar]; }
    if (ratings > 4.75 && ratings <= 5) { starRating = [fullStar, fullStar, fullStar, fullStar, fullStar]; }

    return (
      <div className='stars-svg'>
        {starRating.map((star, index) => (
          <img className='star-svg' key={index} src={star}/>
        ))}
      </div>
    )
  }
}
