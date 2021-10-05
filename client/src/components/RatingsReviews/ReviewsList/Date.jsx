import React from 'react';

const Date = (props) => {
  //console.log('date props', props);
  // var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  // var today  = props.reviewDate;

  // console.log(today.toLocaleDateString("en-US")); // 9/17/2016
  // console.log(today.toLocaleDateString("en-US", options)); // Saturday, September 17, 2016

  return (
    <p className='review-date'>{props.reviewDate}</p>
  )
}

export default Date;