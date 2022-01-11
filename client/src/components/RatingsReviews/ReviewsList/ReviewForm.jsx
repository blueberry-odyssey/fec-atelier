import React, { useState } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import CharsRatings from './CharsRatings.jsx';
import ImageUpload from './ImageUpload.jsx';
import OverallRating from './OverallRating.jsx';
import '../../../index.css';

Modal.setAppElement('#app');

export default class ReviewForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
      modalIsOpen: false,
      characteristics: props.characteristics,
      productData: props.productData,
      charsRating: [],
      disabled: false,
      rating: 0,
      message: '',
      recommend: null,
      summary: '',
      body: '',
      countStmt: '',
      charCount: 0,
      photos: [],
      images: null,
      nickname: '',
      email: '',
      Fit: 0,
      Size: 0,
      Width: 0,
      Comfort: 0,
      Quality: 0,
      Length: 0
    };
    this.countChars = this.countChars.bind(this);
    this.calculateChars = this.calculateChars.bind(this);
    this.getPhotos = this.getPhotos.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  static getDerivedStateFromProps(props, state) {
    return {
      characteristics: props.characteristics,
      productData: props.productData,
      id: props.id
    }
    return null;
  }

  componentDidUpdate(prevProps) {
    if (prevProps.characteristics !== this.props.characteristics) {
      this.setState({ charsRating: [] }, () => { this.calculateChars(); });
    }
  }

  componentDidMount() {
    this.calculateChars();
  }

  countChars(e) {
    let count = e.target.value.length;

    this.setState({
      currentCount: count,
      charCount: 50 - count,
      body: e.target.value
    });

    if (count < 50) {
      this.setState({
        countStmt: 'Minimum required characters left: '
      })
    } else {
      this.setState({
        countStmt: 'Minumum reached'
      })
    }
  }

  calculateChars() {
    let charsArray = Object.entries(this.props.characteristics);

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
  }

  getPhotos(photoArray) {
    this.setState({ photos: photoArray });
  }

  handleInputChange(e) {
    this.setState({ [e.target.name] : e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();

    let bool = (this.state.recommend === 'true') ? true : false;

    let charsObj = {};
    let relevant = Object.keys(this.state);
    for (var i = 0; i < this.state.charsRating.length; i++) {
      for (var j = 0; j < relevant.length; j++) {
        if (this.state.charsRating[i][1] === relevant[j]) {
          charsObj[this.state.charsRating[i][0]] = Number(this.state[relevant[j]]);
        }
      }
    }

    let params = {
      product_id: this.state.id,
      rating: Number(this.state.rating),
      summary: this.state.summary,
      body: this.state.body,
      recommend: bool,
      name: this.state.nickname,
      email: this.state.email,
      photos: this.state.photos,
      characteristics: charsObj
    };

    this.setState({
      modalIsOpen: false,
    });

    axios.post('/reviews/postReview', { params })
      .then(result => {
        this.props.getAllReviews();
      })
      .catch(err => { console.log(err); });
  }

  render() {
    return (
      <div className='modal-form'>
        <button className='add-review-btn' disabled={this.state.disabled} onClick={() => {this.setState({ modalIsOpen: true, disabled: true })}}>Add a Review</button>
        <Modal isOpen={this.state.modalIsOpen}>
          <form onSubmit={this.handleSubmit}>

            <label className='form-headline'>Write Your Review</label><br/>
            <h4>About the "{this.state.productData.name}"</h4>

            <OverallRating message={this.state.message} handleInputChange={this.handleInputChange} />
            <br/>
            <label className='form-recommend' htmlFor='recommend'>Do you recommend this product? <span className='form-mandatory'>*</span> </label>
            <input type='radio' name='recommend' value='true' onChange={this.handleInputChange} required></input><label>Yes</label>
            <input type='radio' name='recommend' value='false' onChange={this.handleInputChange} required></input><label>No</label><br/><br/>

            <CharsRatings chars={this.props.characteristics}/>
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

            <label className='form-summary' htmlFor='summary'>Summary </label><br/>
            <input type='text' name='summary' size='50' maxLength='60' placeholder='i.e. Best purchase ever!' onChange={this.handleInputChange}></input><br/><br/>

            <label className='form-body' htmlFor='body'>Body <span className='form-mandatory'>*</span> </label><br/>
            <textarea name='body' cols='60' rows='5' minLength='50' maxLength='1000' placeholder='Why did you like the product or not?' onChange={this.countChars} required></textarea>
            <p className='form-char-count'>{this.state.countStmt}{this.state.currentCount >= 50 ? null : this.state.charCount}</p><br/>

            <ImageUpload getPhotos={this.getPhotos} />
            <br/><br/>

            <label className='form-nickname' htmlFor='nickname'>Nickname <span className='form-mandatory'>*</span> </label>
            <p className='form-disclaimer'>For privacy reasons, do not use your full name</p>
            <input type='text' name='nickname' size='40' maxLength='60' placeholder='i.e. jackson11' onChange={this.handleInputChange} required></input><br/><br/>

            <label className='form-email' htmlFor='email'>Email <span className='form-mandatory'>*</span> </label>
            <p className='form-disclaimer'>For authentication reasons, you will not be emailed</p>
            <input type='email' name='email' size='40' placeholder='i.e. jackson11@email.com' onChange={this.handleInputChange} required></input><br/><br/><br/><br/>

            <input className='form-submit-btn' type='submit' value='Submit'></input>
          </form>
        </Modal>
      </div>
    )
  }
}



