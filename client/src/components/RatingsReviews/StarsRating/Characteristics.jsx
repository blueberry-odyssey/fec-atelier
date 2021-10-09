import React from 'react';
import DetailBarScale from './DetailBarScale.jsx';

export default class Characteristics extends React.Component {
  constructor(props) {
    super(props);
    //console.log('CHARS PROPS:', props);
    this.state = {
      chars: props.characteristics,
      details: [],
      detailsObj: {
        'Size': ['Too small', 'Perfect', 'Too large'],
        'Width': ['Too narrow', 'Perfect', 'Too large'],
        'Comfort': ['Uncomfortable', 'Perfect'],
        'Quality': ['Poor', 'Perfect'],
        'Length': ['Too short', 'Perfect', 'Too long'],
        'Fit': ['Too tight', 'Perfect', 'Too loose']
      }
    }
    this.matchChars = this.matchChars.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.characteristics !== this.props.characteristics) {
      this.setState({ chars: this.props.characteristics },
        () => { this.matchChars(); });
    }
  }

  componentDidMount() {
    this.matchChars();
  }

  matchChars() {
    let details = Object.entries(this.props.characteristics);
    details.map(arr => {
      if (arr[1].value === null) {
        arr[1].value = 0;
      } else {
        let unrounded = Number(arr[1].value);
        let rounded = unrounded.toFixed(2);
        arr[1].value = rounded;
      }
    })

    let detailObj = this.state.detailsObj;
    for (var i = 0; i < details.length; i++) {
      let current = details[i];
      for (var key in detailObj) {
        if (current[0] === key) {
          current.push(detailObj[key]);
        }
      }
    }
    this.setState({ details: details });
  }

  render() {
    return (
      <div className='characteristics-section'>
          {this.state.details.map((factor, i) => (
            <div key={factor[1].id}>
              <p className='detail-name'>{factor[0]}</p>
              <div className={factor[2].length === 2 ? 'detail-bar-row-two' : 'detail-bar-row-three'}>
                <DetailBarScale value={factor[1].value} />
              </div>
              <div className={factor[2].length === 2 ? 'detail-comment-row-two' : 'detail-comment-row-three'}>
                {factor[2].map((comment, index) => (
                  <p key={index} className={factor[2].length === 2 ? 'detail-comment-two' : 'detail-comment-three'}>{comment}</p>
                ))}
              </div>
            </div>
          ))}
      </div>

    )
  }
}

