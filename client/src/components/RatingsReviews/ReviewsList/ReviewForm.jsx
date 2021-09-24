import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#app');

export default class ReviewForm extends React.Component {

  constructor(props) {
    console.log('REVIEW FORM PROPS: ', props);
    super(props);
    this.state = {
      modalIsOpen: false,
      characteristics: props.characteristics,
      productData: props.productData,
      rating: 0,
      summary: null,
      body: '',
      recommend: null,
      photos: [],
      name: '',
      email: ''
    };

    let charsArray = Object.entries(this.state.characteristics);


    this.postReview = this.postReview.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate(prevProps) {
    if(prevProps.productData !== this.props.productData) {
      this.setState({productData: this.props.productData});
    }
  }

  postReview(e) {
    e.preventDefault();

    let params = {
      product_id: this.state.id,
      rating: 5,
      summary: 'I\'m testing postReview',
      body: 'If you see this, you did it!',
      recommend: true,
      name: 'bhbh1234',
      email: 'bhbh1234@yahoo.com',
      // photos: [],
      characteristics: {
        '159159': 5,
        '159160': 5,
        '159161': 5,
        '159162': 5
      }
    };

    axios.post('/reviews/postReview', { params })
      .then(result => {
        console.log('client post success', result);
      })
      .catch(err => {
        throw err;
      });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.setState({
      modalIsOpen: false
    });
  }


  render() {
    return (
      <div className='modal-form'>

        {/* create Add a Review button here */}
        <button className='add-review-btn' onClick={() => {this.setState({ modalIsOpen: true })}}>Add a Review</button>

        <Modal isOpen={this.state.modalIsOpen}>
          <form onSubmit={this.handleSubmit}> {/* add onSubmit function here */}

            <label className='form-headline'>Write Your Review</label><br/>
            <h4>About the {this.state.productData.name}</h4> {/* add product name here */}

            {/* rating */}
            <label className='form-rating' htmlFor='rating'>Overall rating <span className='form-mandatory'>*</span> </label>
            <input type='radio' name='rating' defaultValue='1' required></input>
            <input type='radio' name='rating' defaultValue='2' required></input>
            <input type='radio' name='rating' defaultValue='3' required></input>
            <input type='radio' name='rating' defaultValue='4' required></input>
            <input type='radio' name='rating' defaultValue='5' required></input><br/><br/>

            {/* recommend */}
            <label className='form-recommend' htmlFor='recommend'>Do you recommend this product? <span className='form-mandatory'>*</span> </label>
            <input type='radio' name='recommend' defaultValue='true' required></input><label>Yes</label>
            <input type='radio' name='recommend' defaultValue='false' required></input><label>No</label><br/><br/>

            {/* characteristics */}
            <label className='form-characteristics' htmlFor='characteristics'>Characteristics <span className='form-mandatory'>*</span> </label><br/>
            <label>Size </label>
            <input type='radio' name='size' required></input>
            <input type='radio' name='size' required></input>
            <input type='radio' name='size' required></input>
            <input type='radio' name='size' required></input>
            <input type='radio' name='size' required></input><br/>
            <input type='radio'></input><br/>
            <input type='radio'></input><br/>
            <input type='radio'></input><br/>
            <input type='radio'></input><br/>
            <br/>

            {/* summary */}
            <label className='form-summary' htmlFor='summary'>Summary </label><br/>
            <input type='text' name='summary' size='50' maxLength='60' placeholder='Example: Best purchase ever!'></input><br/><br/>

            {/* body */}
            <label className='form-body' htmlFor='body'>Body <span className='form-mandatory'>*</span> </label><br/>
            <textarea name='body' cols='60' rows='5' minLength='50' maxLength='1000' placeholder='Why did you like the product or not?' required></textarea><br/><br/>

            {/* photos -- change to accept url instead */}
            <label className='form-photos' htmlFor='photos[]'>Photos: </label><br/>
            <input type='file' multiple name='photos[]' size='50' placeholder='Select photo'></input>
            <br/><br/>

            {/* name */}
            <label className='form-nickname' htmlFor='nickname'>Nickname <span className='form-mandatory'>*</span> </label>
            <p className='form-disclaimer'>For privacy reasons, do not use your full name</p>
            <input type='text' name='nickname' size='40' maxLength='60' placeholder='Example: jackson11' required></input><br/><br/>

            {/* email */}
            <label className='form-email' htmlFor='email'>Email <span className='form-mandatory'>*</span> </label>
            <p className='form-disclaimer'>For authentication reasons, you will not be emailed</p>
            <input type='email' name='email' size='40' placeholder='Example: jackson11@email.com' required></input><br/><br/><br/><br/>

            {/* submit button */}
            <input className='form-submit-btn' type='submit' value='Submit' ></input>
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