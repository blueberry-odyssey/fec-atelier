import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }


  render() {
    return (
      <h1>This is FEC</h1>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));