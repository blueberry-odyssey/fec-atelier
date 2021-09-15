import React from 'react';
import ReactDOM from 'react-dom';
import RelatedItems from './components/Related/Related-items/Related-Items.jsx'
import './index.css';
import Overview from './components/Overview/Overview.jsx';
import RatingsReviews from './components/RatingsReviews/RatingsReviews.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className='app-body'>
        <div className='component-1'>
          <Overview />
        </div>
        <div className='component-2'>
          <RatingsReviews />
        </div>
        <div className='component-3'>
          <RelatedItems/>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));