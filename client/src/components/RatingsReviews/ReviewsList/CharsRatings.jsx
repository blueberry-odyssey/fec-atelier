import React from 'react';

export default class CharsRatings extends React.Component {
  constructor(props) {
    super(props);
    // console.log('form chars props', props);
    this.state = {
      charsRating: []
    }
  }

  calculateCharsRatings() {
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
    //console.log('checking for charsrating', this.state.charsRating);
  }

  render() {
    return (
      <></>
    )
  }
}