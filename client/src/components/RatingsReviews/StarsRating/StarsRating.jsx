import React from 'react';
import $ from 'jquery';
import Characteristics from './Characteristics.jsx';

export default class StarsRating extends React.Component {
  constructor(props) {
    super(props);
    //console.log('stars rating', props);
    this.state = {
      id: props.id,
      characteristics: null,
      ratings: null,
      recommended: null
    };

  }

  render() {
    return (
      <div>
        <p>Stars Rating goes here</p><br />
        <Characteristics metadata={this.state.metadata}/>
      </div>
    )
  }
}
