import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#app');

export default class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false
    };

  }

  //const [modalIsOpen, setModalIsOpen] = useState(false);

  render() {
    return (
      <div className='modal-form'>

        {/* create Add a Review button here */}
        <button className='add-review-btn' onClick={() => {this.setState({ modalIsOpen: true })}}>Add a Review</button>

        <Modal isOpen={this.state.modalIsOpen}>
          <form> {/* add onSubmit function here */}

            <label>Write Your Review</label><br/>
            <h5>About the </h5> {/* add product name here */}

            {/* rating */}
            <label htmlFor='rating'>Overall rating: </label>
            <input type='radio' name='rating' defaultValue='1'></input>
            <input type='radio' name='rating' defaultValue='2'></input>
            <input type='radio' name='rating' defaultValue='3'></input>
            <input type='radio' name='rating' defaultValue='4'></input>
            <input type='radio' name='rating' defaultValue='5'></input><br/><br/>

            {/* recommend */}
            <label htmlFor='recommend'>Do you recommend this product? </label>
            <input type='radio' name='recommend' defaultValue='true'></input><label>Yes</label>
            <input type='radio' name='recommend' defaultValue='false'></input><label>No</label><br/><br/>

            {/* characteristics */}
            <label htmlFor='characteristics'>Characteristics</label><br/>
            <label></label>
            <input type='radio'></input><br/>
            <input type='radio'></input><br/>
            <input type='radio'></input><br/>
            <input type='radio'></input><br/>
            <input type='radio'></input><br/> <br/>

            {/* summary */}
            <label htmlFor='summary'>Summary: </label>
            <input type='text' maxLength='60' placeholder='Example: Best purchase ever!'></input><br/><br/>

            {/* body */}
            <label htmlFor='body'>Body: </label><br/>
            <textarea cols='60' rows='5' minLength='50' maxLength='1000' placeholder='Why did you like the product or not?'></textarea><br/><br/>

            {/* photos -- change to accept url instead */}
            <label htmlFor='photos'>Photos: </label><br/>
            <input type='url' size='50' placeholder='Paste URL here'></input>
            <br/><br/>

            {/* name */}
            <label htmlFor='nickname'>What is your nickname? </label>
            <input type='text' maxLength='60' placeholder='Example: jackson11'></input><br/><br/>

            {/* email */}
            <label htmlFor='email'>Your email: </label>
            <input type='email' placeholder='Example: jackson11@email.com'></input><br/><br/>

            {/* submit button */}
            <input type='submit' value='Submit' onClick={() => {this.setState({ modalIsOpen: false })}}></input>
          </form>
        </Modal>
      </div>
    )
  }

}


{/*
below name:
For privacy reasons, do not use your full name or email address

below email:
For authentication reasons, you will not be emailed
*/}