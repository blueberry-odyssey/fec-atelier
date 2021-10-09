import React from 'react';
import downArrow from './downArrow.svg';

export default class DetailBarScale extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.value !== this.props.value) {
      this.setState({ value: this.props.value });
    }
  }

  render() {
    let val = Number(this.state.value);
    let divArrowBar = {
      'width': val * 46
    }
    return (
      <div className='detail-bar-gray'>
        <div className='detail-arrow-bar' style={divArrowBar}>
        <img className='detail-arrow' src={downArrow} />
        </div>
      </div>
    )
  }
}
