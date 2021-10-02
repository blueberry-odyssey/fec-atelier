import React, { useState } from 'react';
import axios from 'axios';
import Modal from 'react-modal';

Modal.setAppElement('#app');

export default class ReviewForm extends React.Component {

  constructor(props) {
    //console.log('REVIEW FORM PROPS: ', props);
    super(props);
    this.state = {
      id: props.id,
      modalIsOpen: false,
      characteristics: props.characteristics,
      productData: props.productData,
      charsRating: [],
      rating: 0,
      recommend: null,
      summary: '',
      body: '',
      photos: [],
      nickname: '',
      email: '',
      Fit: 0,
      Size: 0,
      Width: 0,
      Comfort: 0,
      Quality: 0,
      Length: 0
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.productData !== this.props.productData) {
      this.setState({productData: this.props.productData});
    }
  }

  componentDidMount() {
    let charsArray = Object.entries(this.state.characteristics);

    let charsChart = {
      'Size': {
        1: 'A size too small',
        2: '1/2 a size too small',
        3: 'Perfect',
        4: '1/2 a size too big',
        5: 'A size too wide'
      },
      'Width': {
        1: 'Too narrow',
        2: 'Slightly narrow',
        3: 'Perfect',
        4: 'Slightly wide',
        5: 'Too wide'
      },
      'Comfort': {
        1: 'Uncomfortable',
        2: 'Slightly uncomfortable',
        3: 'Ok',
        4: 'Comfortable',
        5: 'Perfect'
      },
      'Quality': {
        1: 'Poor',
        2: 'Below average',
        3: 'What I expected',
        4: 'Pretty great',
        5: 'Perfect'
      },
      'Length': {
        1: 'Runs short',
        2: 'Runs slightly short',
        3: 'Perfect',
        4: 'Runs slightly long',
        5: 'Runs long'
      },
      'Fit': {
        1: 'Fits tight',
        2: 'Fits slightly tight',
        3: 'Perfect',
        4: 'Fits slightly loose',
        5: 'Fits loose'
      }
    };

    for (var i = 0; i < charsArray.length; i++) {
      let current = charsArray[i];
      for (var key in charsChart) {
        if (current[0] === key) {
          let trait = [current[1].id, key, Object.entries(charsChart[key])];
          this.state.charsRating.push(trait);
        }
      }
    }
    //console.log('CHARS RESULT: ', this.state.charsRating);
  }


  postReview(e) {
    e.preventDefault();

    let params = {
      product_id: 47421,
      rating: 5,
      summary: 'I\'m testing once again',
      body: 'If you see this, you did it!',
      recommend: true,
      name: 'bhbh12',
      email: 'bhbh123@yahoo.com',
      photos: [],
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
      .catch(err => { console.log(err) });
  }


  handleInputChange(e) {
    this.setState({
      [e.target.name] : e.target.value
    });
    // console.log('HANDLE INPUT CHANGE:', e.target.name);
    // console.log('HANDLE INPUT CHANGE:', e.target.value);

  }


  handleSubmit(e) {
    e.preventDefault();

    //console.log('this is what state is after submit:', this.state);
    let photosArr = [];
    for (var i = 29; i <= 33; i++) {
      if (e.target[i].value.length > 0) {
        photosArr.push(e.target[i].value);
      }
    }

    let bool;
    if (this.state.recommend === 'true') {
      bool = true;
    } else {
      bool = false;
    }

    let charsObj = {};
    let relevant = Object.keys(this.state);
    for (var i = 0; i < this.state.charsRating.length; i++) {
      for (var j = 0; j < relevant.length; j++) {
        if (this.state.charsRating[i][1] === relevant[j]) {
          charsObj[this.state.charsRating[i][0]] = Number(this.state[relevant[j]]);
        }
      }
    }
    //console.log('CHECK CHARS OBJ:', charsObj);

    let params = {
      product_id: this.state.id,
      rating: Number(this.state.rating),
      summary: this.state.summary,
      body: this.state.body,
      recommend: bool,
      name: this.state.nickname,
      email: this.state.email,
      photos: photosArr,
      characteristics: charsObj
    };
    console.log('checking params:', params);

    this.setState({
      modalIsOpen: false
    });

    axios.post('/reviews/postReview', { params })
      .then(result => {
        console.log('client post success', result);
      })
      .catch(err => {
        console.log(err);
      });
  }


  render() {
    return (
      <div className='modal-form'>

        {/* create Add a Review button here */}
        {/* <button onClick={this.postReview}>Post Review Test</button> */}
        <button className='add-review-btn' onClick={() => {this.setState({ modalIsOpen: true })}}>Add a Review</button>

        <Modal isOpen={this.state.modalIsOpen}>
          <form onSubmit={this.handleSubmit}> {/* add onSubmit function here */}

            <label className='form-headline'>Write Your Review</label><br/>
            <h4>About the "{this.state.productData.name}"</h4> {/* add product name here */}

            {/* rating */}
            <label className='form-rating' htmlFor='rating'>Overall rating <span className='form-mandatory'>*</span> </label>
            {}
            <input type='radio' name='rating' value='1' onChange={this.handleInputChange} required></input>
            <input type='radio' name='rating' value='2' onChange={this.handleInputChange} required></input>
            <input type='radio' name='rating' value='3' onChange={this.handleInputChange} required></input>
            <input type='radio' name='rating' value='4' onChange={this.handleInputChange} required></input>
            <input type='radio' name='rating' value='5' onChange={this.handleInputChange} required></input>
            <br/><br/>

            {/* recommend */}
            <label className='form-recommend' htmlFor='recommend'>Do you recommend this product? <span className='form-mandatory'>*</span> </label>
            <input type='radio' name='recommend' value='true' onChange={this.handleInputChange} required></input><label>Yes</label>
            <input type='radio' name='recommend' value='false' onChange={this.handleInputChange} required></input><label>No</label><br/><br/>

            {/* characteristics */}
            <label className='form-characteristics' htmlFor='characteristics'>Characteristics <span className='form-mandatory'>*</span> </label><br/><br/>

              {this.state.charsRating.map(trait => (
                <table style={{width: '100%'}} key={trait[0]}>
                  <thead>
                    <tr>
                      <th style={{width: '16%'}}></th>
                      <th className='form-characteristics-header' style={{width: '16%'}}>{trait[2][0][1]}</th>
                      <th className='form-characteristics-header' style={{width: '16%'}}>{trait[2][1][1]}</th>
                      <th className='form-characteristics-header' style={{width: '16%'}}>{trait[2][2][1]}</th>
                      <th className='form-characteristics-header' style={{width: '16%'}}>{trait[2][3][1]}</th>
                      <th className='form-characteristics-header' style={{width: '16%'}}>{trait[2][4][1]}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><label className='form-trait' name={trait[1]} >{trait[1]}</label></td>
                      <td className='form-trait-radio'><input type='radio' name={trait[1]} value={trait[2][0][0]} onChange={this.handleInputChange} required></input></td>
                      <td className='form-trait-radio'><input type='radio' name={trait[1]} value={trait[2][1][0]} onChange={this.handleInputChange} required></input></td>
                      <td className='form-trait-radio'><input type='radio' name={trait[1]} value={trait[2][2][0]} onChange={this.handleInputChange} required></input></td>
                      <td className='form-trait-radio'><input type='radio' name={trait[1]} value={trait[2][3][0]} onChange={this.handleInputChange} required></input></td>
                      <td className='form-trait-radio'><input type='radio' name={trait[1]} value={trait[2][4][0]} onChange={this.handleInputChange} required></input></td>
                    </tr>
                  </tbody>
                </table>
              ))}
            <br/>

            {/* summary */}
            <label className='form-summary' htmlFor='summary'>Summary </label><br/>
            <input type='text' name='summary' size='50' maxLength='60' placeholder='i.e. Best purchase ever!' onChange={this.handleInputChange}></input><br/><br/>

            {/* body */}
            <label className='form-body' htmlFor='body'>Body <span className='form-mandatory'>*</span> </label><br/>
            <textarea name='body' cols='60' rows='5' minLength='50' maxLength='1000' placeholder='Why did you like the product or not?' onChange={this.handleInputChange} required></textarea><br/><br/>

            {/* photos -- change to accept url instead */}
            <label className='form-photos' htmlFor='photos'>Photos: </label><br/>
            <p className='form-disclaimer'>Can upload up to 5 photos</p>
            <input type='text' name='photos' size='35' placeholder='Paste URL here'></input><br/>
            <input type='text' name='photos' size='35' placeholder='Paste URL here'></input><br/>
            <input type='text' name='photos' size='35' placeholder='Paste URL here'></input><br/>
            <input type='text' name='photos' size='35' placeholder='Paste URL here'></input><br/>
            <input type='text' name='photos' size='35' placeholder='Paste URL here'></input>
            <br/><br/>

            {/* name */}
            <label className='form-nickname' htmlFor='nickname'>Nickname <span className='form-mandatory'>*</span> </label>
            <p className='form-disclaimer'>For privacy reasons, do not use your full name</p>
            <input type='text' name='nickname' size='40' maxLength='60' placeholder='i.e. jackson11' onChange={this.handleInputChange} required></input><br/><br/>

            {/* email */}
            <label className='form-email' htmlFor='email'>Email <span className='form-mandatory'>*</span> </label>
            <p className='form-disclaimer'>For authentication reasons, you will not be emailed</p>
            <input type='email' name='email' size='40' placeholder='i.e. jackson11@email.com' onChange={this.handleInputChange} required></input><br/><br/><br/><br/>

            {/* submit button */}
            <input className='form-submit-btn' type='submit' value='Submit' ></input>
          </form>
        </Modal>
      </div>
    )
  }

}



{/* <div className='modal-form'>

  create Add a Review button here */}
//   <button className='add-review-btn' onClick={() => {this.setState({ modalIsOpen: true })}}>Add a Review</button>

//   <Modal isOpen={this.state.modalIsOpen}>
//     <form onSubmit={this.handleSubmit}> {/* add onSubmit function here */}

//       <label className='form-headline'>Write Your Review</label><br/>
//       <h4>About the {this.state.productData.name}</h4> {/* add product name here */}

//       {/* rating */}
//       <label className='form-rating' htmlFor='rating'>Overall rating <span className='form-mandatory'>*</span> </label>
//       <input type='radio' name='rating' defaultValue='1' required></input>
//       <input type='radio' name='rating' defaultValue='2' required></input>
//       <input type='radio' name='rating' defaultValue='3' required></input>
//       <input type='radio' name='rating' defaultValue='4' required></input>
//       <input type='radio' name='rating' defaultValue='5' required></input><br/><br/>

//       {/* recommend */}
//       <label className='form-recommend' htmlFor='recommend'>Do you recommend this product? <span className='form-mandatory'>*</span> </label>
//       <input type='radio' name='recommend' defaultValue='true' required></input><label>Yes</label>
//       <input type='radio' name='recommend' defaultValue='false' required></input><label>No</label><br/><br/>

//       {/* characteristics */}
//       <label className='form-characteristics' htmlFor='characteristics'>Characteristics <span className='form-mandatory'>*</span> </label><br/>
//       <label>Size </label>
//       <input type='radio' name='size' required></input>
//       <input type='radio' name='size' required></input>
//       <input type='radio' name='size' required></input>
//       <input type='radio' name='size' required></input>
//       <input type='radio' name='size' required></input><br/>
//       <input type='radio'></input><br/>
//       <input type='radio'></input><br/>
//       <input type='radio'></input><br/>
//       <input type='radio'></input><br/>
//       <br/>

//       {/* summary */}
//       <label className='form-summary' htmlFor='summary'>Summary </label><br/>
//       <input type='text' name='summary' size='50' maxLength='60' placeholder='Example: Best purchase ever!'></input><br/><br/>

//       {/* body */}
//       <label className='form-body' htmlFor='body'>Body <span className='form-mandatory'>*</span> </label><br/>
//       <textarea name='body' cols='60' rows='5' minLength='50' maxLength='1000' placeholder='Why did you like the product or not?' required></textarea><br/><br/>

//       {/* photos -- change to accept url instead */}
//       <label className='form-photos' htmlFor='photos[]'>Photos: </label><br/>
//       <input type='file' multiple={true} name='photos[]' size='50' placeholder='Select photo'></input>
//       <br/><br/>

//       {/* name */}
//       <label className='form-nickname' htmlFor='nickname'>Nickname <span className='form-mandatory'>*</span> </label>
//       <p className='form-disclaimer'>For privacy reasons, do not use your full name</p>
//       <input type='text' name='nickname' size='40' maxLength='60' placeholder='Example: jackson11' required></input><br/><br/>

//       {/* email */}
//       <label className='form-email' htmlFor='email'>Email <span className='form-mandatory'>*</span> </label>
//       <p className='form-disclaimer'>For authentication reasons, you will not be emailed</p>
//       <input type='email' name='email' size='40' placeholder='Example: jackson11@email.com' required></input><br/><br/><br/><br/>

//       {/* submit button */}
//       <input className='form-submit-btn' type='submit' value='Submit' ></input>
//     </form>
//   </Modal>
// </div>


