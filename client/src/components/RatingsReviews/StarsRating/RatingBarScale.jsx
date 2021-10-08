import React from 'react';

export default class RatingBarScale extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: props.rating,
      total: props.total
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.rating !== this.props.rating) {
      this.setState({ rating: this.props.rating, total: this.props.total });
    }
  }

  render() {
    let total = 0;
    let divStyleGreen = {};
    if (Object.keys(this.state.total).length > 0) {
      let totalRatings = Object.values(this.state.total);
      for (var key in totalRatings) {
        total += Number(totalRatings[key]);
      }
      let greenScale = (this.state.rating / total) * 175;
      divStyleGreen['width'] = greenScale;
    } else if (Object.keys(this.state.total).length === 0) {
      divStyleGreen['width'] = 0;
    }


    return (
      <div className='rating-bar-gray'>
        <div className='rating-bar-green' style={divStyleGreen}></div>
      </div>
    )
  }
}