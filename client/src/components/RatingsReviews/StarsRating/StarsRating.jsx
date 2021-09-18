import React from 'react';
import $ from 'jquery';
import Characteristics from './Characteristics.jsx';

export default class StarsRating extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
      characteristics: {
        "Fit": {
            "id": 159159,
            "value": "2.4000000000000000"
        },
        "Length": {
            "id": 159160,
            "value": "2.5000000000000000"
        },
        "Comfort": {
            "id": 159161,
            "value": "2.7000000000000000"
        },
        "Quality": {
            "id": 159162,
            "value": "3.6000000000000000"
        }
      },
      ratings: 3.5,
      recommended: 67
    };

  }

  render() {
    return (
      <div>
        <p>Stars Rating goes here</p><br />
        <Characteristics {... this.state} />
      </div>
    )
  }
}
