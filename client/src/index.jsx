import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import RelatedItems from './components/Related-items/Related-Items.jsx'
// import 'reset-css';
import './index.css';
import Overview from './components/Overview/Overview.jsx';
import RatingsReviews from './components/RatingsReviews/RatingsReviews.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    //every time we change the product_id
    //...average rating, number of reviews,
    this.state = { product_id: '47421' };
  }

  //function to get array of stars


  render() {
    return (
      <div className='app-body'>
        <div className='component-1'>
          <Overview product_id={this.state['product_id']} />
        </div>
        <div className='component-2'>
          <RatingsReviews />
        </div>
        <div className='component-3'>Replace w/Component 3</div>
      </div >
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));