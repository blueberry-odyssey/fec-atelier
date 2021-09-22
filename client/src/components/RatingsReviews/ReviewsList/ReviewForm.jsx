import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#app');

const ReviewForm = (props) => {

  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div className='modal-form'>

      {/* create Add a Review button here */}
      <button className='add-review-btn' onClick={() => setModalIsOpen(true)}>Add a Review</button>

      <Modal isOpen={modalIsOpen}>
        <form onSubmit={props.postReview}> {/* add onSubmit function here */}

          <label>Write Your Review</label><br/>
          <h5>About the </h5> {/* add product name here */}

          {/* rating */}
          <label htmlFor='rating'>Overall rating: </label>
          <input type='radio' defaultValue='1'></input>
          <input type='radio' defaultValue='2'></input>
          <input type='radio' defaultValue='3'></input>
          <input type='radio' defaultValue='4'></input>
          <input type='radio' defaultValue='5'></input><br/><br/>

          {/* recommend */}
          <label htmlFor='recommend'>Do you recommend this product?</label>
          <input type='radio' defaultValue='true'></input><label>Yes</label>
          <input type='radio' defaultValue='false'></input><label>No</label><br/><br/>

          {/* characteristics */}
          <label htmlFor='characteristics'>Characteristics</label><br/>
          <label></label>
          <input type='radio'></input><br/>
          <input type='radio'></input><br/>
          <input type='radio'></input><br/>
          <input type='radio'></input><br/>
          <input type='radio'></input><br/> <br/>

          {/* summary */}
          <label htmlFor='summary'>Summary:</label>
          <input type='text' maxLength='60' defaultValue='Example: Best purchase ever!'></input><br/><br/>

          {/* body */}
          <label htmlFor='body'>Body:</label>
          <textarea cols='60' rows='5' minLength='50' maxLength='1000' defaultValue='Why did you like the product or not?'></textarea><br/><br/>

          {/* photos -- change to accept url instead */}
          <label htmlFor='photos'>Photos:</label>
          <input type='file'></input>
          <br/><br/>

          {/* name */}
          <label htmlFor='nickname'>What is your nickname? </label>
          <input type='text' maxLength='60' defaultValue='Example: jackson11'></input><br/><br/>

          {/* email */}
          <label htmlFor='email'>Your email: </label>
          <input type='email' defaultValue='Example: jackson11@email.com'></input><br/><br/>

          {/* submit button */}
          <input type='submit' value='Submit' onClick={() => setModalIsOpen(false)}></input>
        </form>
      </Modal>
    </div>
  )

}

export default ReviewForm;

{/*
below name:
For privacy reasons, do not use your full name or email address

below email:
For authentication reasons, you will not be emailed
*/}