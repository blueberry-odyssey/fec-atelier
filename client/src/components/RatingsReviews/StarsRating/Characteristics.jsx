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
    console.log('details', details);
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
        <table>
          {this.state.details.map((factor, i) => (
            <tbody key={i}>
            <tr className='detail-name'>
              <td key={factor[0]}>{factor[0]}</td>
            </tr>
            <tr className='detail-bar-row'>
              <td key={factor[1].id}><DetailBarScale value={factor[1].value} /></td>
            </tr>
            <tr className='detail-comment-row'>
              {factor[2].map((comment, index) => (
                <td key={index} className='detail-comment'>{comment}</td>
              ))}
            </tr>
            </tbody>
          ))}
        </table>
      </div>

    )
  }
}

