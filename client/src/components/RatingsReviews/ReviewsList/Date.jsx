import React from 'react';

export default class Date extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      converted: ''
    }
  }

  componentDidMount() {
    this.calculateDate();
  }

  calculateDate() {
    let months = {
      '01': 'January',
      '02': 'February',
      '03': 'March',
      '04': 'April',
      '05': 'May',
      '06': 'June',
      '07': 'July',
      '08': 'August',
      '09': 'September',
      '10': 'October',
      '11': 'November',
      '12': 'December'
    };
    let date = this.props.reviewDate.substr(0, 10);
    let month = this.props.reviewDate.substr(5, 2);
    let year = this.props.reviewDate.substr(0, 4);
    let day = this.props.reviewDate.substr(8, 2);
    let convertedDate = '';

    for (var key in months) {
      if (month === key) {
        convertedDate += months[key] + ' ' + day + ', ' + year;
      }
    }
    this.setState({
      converted: convertedDate
    });
    //console.log('check for date:', convertedDate);
  }

  render() {
    return (
      <p className='review-date'>{this.state.converted}</p>
    )
  }
}
