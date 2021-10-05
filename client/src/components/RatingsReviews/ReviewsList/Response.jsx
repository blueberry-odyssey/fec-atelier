import React from 'react';

const Response = (props) => {

  if (props.response !== null) {
    return (
      <div className='review-response'>
        {props.response}
      </div>
    )
  } else {
    return (
      <>
      </>
    )
  }
}

export default Response;