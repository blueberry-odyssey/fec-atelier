import React from 'react';
import axios from 'axios';

const UpdatedComponent = (OriginalComponent) => {
  class NewComponent extends React.Component {
    constructor(props) {
      super(props);
      this.makeRequest = this.makeRequest.bind(this);
    }
    //add axios request
    makeRequest(e) {
      // console.log('interaction request wtih:', e);
      // console.log('className: ', e.target.className);
      // console.log('outerHTML string element: ', e.target.outerHTML);
      // console.log('widgetName: ', this.props.widgetName);
      let time = Date();
      // console.log('TIME: ', time, typeof time);

      let data = {
        element: e.target.outerHTML,
        widget: this.props.widgetName,
        time: time
      }

      axios({
        method: 'post',
        url: '/interactions',
        data: data
      })
        .then(result => {
          console.log('success! ', result.data);
        })
        .catch(err => {
          console.log('we did not success!', err);
        });
    }
    render() {
      return (
        <div onClick={this.makeRequest}>
          <OriginalComponent {...this.props} />
        </div>
      )
    }
  }
  return NewComponent;
}
export default UpdatedComponent;