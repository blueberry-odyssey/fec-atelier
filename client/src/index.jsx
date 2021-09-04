import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }


  render() {
    return (
      <h1 className='title'>This is FEC</h1>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));