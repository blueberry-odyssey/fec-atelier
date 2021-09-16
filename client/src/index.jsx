import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import RelatedItems from './components/Related/Related-items/Related-Items.jsx'
import './index.css';
import Overview from './components/Overview/Overview.jsx';
import RatingsReviews from './components/RatingsReviews/RatingsReviews.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 47421,
      product_id: '47421',
      relatedItems: [],
      styleData: []
    };
  }

  componentDidMount() {
    axios.get('/products/findRelatedItems', { params: { id: this.state.id } })
      .then(result => {
        let productIDArray = result.data;
          axios.get('/products/relatedProductsAndStyles', { params: {productIDArray, styles: '' }})
            .then(data => {
              this.setState({
                relatedItems: data.data
              })
              axios.get('/products/relatedProductsAndStyles', { params: {productIDArray, styles: '/styles' }})
                .then(styleData => {
                  // console.log('relatedStyle Data', styleData);
                  this.setState({
                    styleData: styleData.data
                  })
                })
                .catch(err => { throw err; })
            })
            .catch(err => { throw err; })
      })
      .catch(err => { throw err; })
    //every time we change the product_id
    //...average rating, number of reviews,
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
        <div className='component-3'>
          <RelatedItems relatedItems={this.state.relatedItems} styleData={this.state.styleData}/>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));