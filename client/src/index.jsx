import React from 'react';
import ReactDOM from 'react-dom';
import RelatedItems from './components/Related-items/Related-Items.jsx'
// import 'reset-css';
import './index.css';
import Overview from './components/Overview/Overview.jsx';

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
        <div className='component-2'>Replace w/Component 2</div>
        <RelatedItems />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));