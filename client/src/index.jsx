import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import RelatedProducts from './components/Related/Related-Products/Related-Products.jsx'
import './index.css';
import Overview from './components/Overview/Overview.jsx';
import RatingsReviews from './components/RatingsReviews/RatingsReviews.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 47421,
      product_id: '47421',
      productData: {},
      relatedItems: [],
      styleData: [],
      ratings: 0,
      characteristics: null,
      recommended: 0,
      page: 0,
      count: 2,
      reviews: [],
      sort: null,
      updated: false
    };

    this.updateOverviewProduct = this.updateOverviewProduct.bind(this);
    this.getReviews = this.getReviews.bind(this);
    this.getProductData = this.getProductData.bind(this);
  }

  getProductData(productData) {
    this.setState({ productData: productData });
  }

  updateOverviewProduct(newProductID) {
    //console.log('newProd', newProductID)
    let newProductIDString = newProductID.toString();
    this.setState({
      product_id: newProductIDString,
      id: newProductID
    })
  }

  getReviews() {
    let params = {
      product_id: this.state.id,
      count: 50,
      sort: this.state.sort
    };

    axios.get('/reviews/getAllReviews', { params })
      .then(result => {
        this.setState({
          page: result.data.page,
          count: result.data.count,
          reviews: result.data.results
        });
      })
      .catch(err => {
        throw err;
      });
  }

  componentDidMount() {

    this.getReviews();

    axios.get('/products/findRelatedItems', { params: { id: this.state.product_id } })
      .then(result => {
        let productIDArray = result.data;
        axios.get('/products/relatedProductsAndStyles', { params: { productIDArray, styles: '' } })
          .then(data => {
            this.setState({
              relatedItems: data.data
            })
            axios.get('/products/relatedProductsAndStyles', { params: { productIDArray, styles: '/styles' } })
              .then(styleData => {
                //console.log('relatedStyle Data', styleData);
                this.setState({
                  styleData: styleData.data
                })
              })
              .catch(err => { throw err; });
          })
          .catch(err => { throw err; });
      })
      .catch(err => { throw err; });

    axios.get('/reviews/meta/getMeta', { params: { product_id: this.state.id } })
      .then(result => {
        // console.log(result.data);
        this.setState({
          ratings: result.data.average,
          characteristics: result.data.characteristics,
          recommended: result.data.recommended,
          updated: true
        });
      })
      .catch(err => {
        throw err;
      });
  }

  render() {
    if (this.state.updated === true) {
      return (
        <div className='app-body'>
          <div className='component-1'>
            <Overview product_id={this.state['product_id']} getProductData={this.getProductData} />
          </div>
          <div className='component-3'>
            <RelatedProducts
              relatedItems={this.state.relatedItems}
              styleData={this.state.styleData}
              updateOverviewProduct={this.updateOverviewProduct}
              overviewCharacteristics={this.state.characteristics} />
          </div>
          <div className='component-2'>
            <RatingsReviews {...this.state} getReviews={this.getReviews} />
          </div>
        </div >
      )
    } else {
      return (
        <></>
      )
    }
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
