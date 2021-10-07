import React from 'react';

const Response = (props) => {

  if (props.response !== null && props.response.trim().length === 0) {
    return (
      <>
      </>
    )
  } else if (props.response !== null) {
    return (
      <div className='review-response'>
        <p className='review-response-header'>Response:</p>
        {props.response}
      </div>
    )
  } else if (props.response === null) {
    return (
      <>
      </>
    )
  }
}

export default Response;