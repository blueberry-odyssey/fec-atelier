import React from 'react';
import ReactDOM from 'react-dom';
import 'reset-css';
import './index.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className='app-body'>
        <div className='component-1'>Replace w/Component 1</div>
        <div className='component-2'>Replace w/Component 2</div>
        <div className='component-3'>Replace w/Component 3</div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));