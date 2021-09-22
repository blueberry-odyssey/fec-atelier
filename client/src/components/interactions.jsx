import React from 'react';
import axios from 'axios';
import config from '../../../config.js';
const basePath = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp';

let options = {
  headers: { Authorization: config.TOKEN },
};

let params = {
  element: '',
  widget: '',
  time: ''
}

const UpdatedComponent = (OriginalComponent) => {
  class NewComponent extends React.Component {
    constructor(props) {
      super(props);

      //do we set the params as state
      // this.state={}

      this.makeRequest = this.makeRequest.bind(this);
    }

    //add axios request
    makeRequest() {
      axios.post('/interactions', params, options)
        .then(result => {

        })
        .catch(err => {

        });
    }

    render() {
      //pass in state and makeRequest as props
      return <OriginalComponent />
    }
  }

  return NewComponent;
}

export default UpdatedComponent;