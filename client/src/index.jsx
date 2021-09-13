import React from 'react';
import ReactDOM from 'react-dom';
import 'reset-css';
import './index.css';
import ProductInfo from './components/ProductInfo.jsx';
import RatingsReviews from './components/RatingsReviews.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className='app-body'>
        <div className='component-1'>
          <ProductInfo />
        </div>
        <div className='component-2'>
          <RatingsReviews />
        </div>
        <div className='component-3'>Replace w/Component 3</div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));