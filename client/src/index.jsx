import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import RelatedProducts from './components/Related/Related-Products/Related-Products.jsx'
import './index.css';
import Overview from './components/Overview/Overview.jsx';
import RatingsReviews from './components/RatingsReviews/RatingsReviews.jsx';

//when page first loads check url and set state

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
      updated: false,
      addOutfit: false
    };

    this.updateOverviewProduct = this.updateOverviewProduct.bind(this);
    this.getReviews = this.getReviews.bind(this);
    this.getProductData = this.getProductData.bind(this);
    this.invokeAddToOutfits = this.invokeAddToOutfits.bind(this);
  }

  getProductData(productData) {
    this.setState({ productData: productData });
  }

  invokeAddToOutfits(trueOrFalse) {
    if (trueOrFalse) {
      this.setState({
        addOutfit: true
      })
    } else {
      this.setState({
        addOutfit: false
      })
    }
  }

  updateOverviewProduct(newProductID) {
    let newProductIDString = newProductID.toString();
    this.setState({
      product_id: newProductIDString,
      id: newProductID
    })
    window.location.hash = this.state.id;
    // console.log('prod id', this.state.product_id)
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
        console.log(err)
      });
  }

  componentDidMount() {
    //get path
    console.log('loook here!!: ', window.location.href);
    const lookupURL = window.location.href;
    //if exists setState
    //change state then update path?
    //or change path, index.jsx listening, and then update state
    const urlProductID = window.location.href.substring(lookupURL.length - 5)
    console.log('loook there!!: ', urlProductID);
    let productIDString = urlProductID.toString();
    this.setState({
      product_id: productIDString,
      id: urlProductID
    })
    window.location.hash = this.state.id;
    //related item sets a new path, and index.jsx should be listening for path change (componentDidUpdate)

    this.getReviews();
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
        console.log(err)
      });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.product_id !== this.state.product_id) {
      axios.get('/products/findRelatedItems', { params: { id: this.state.product_id } })
      .then(result => {
        var productIDArray = result.data;
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
      .catch(err => { console.log(err) });
    }
  }

  render() {
    // console.log(window.location.pathname);

    if (this.state.updated === true) {
      return (
        <div className='app-body'>
          <div className='component-1'>
            <Overview product_id={this.state['product_id']} getProductData={this.getProductData} widgetName='Overview' invokeAddToOutfits={this.invokeAddToOutfits} />
          </div>
          <div className='component-3'>
            <RelatedProducts
              relatedItems={this.state.relatedItems}
              styleData={this.state.styleData}
              updateOverviewProduct={this.updateOverviewProduct}
              overviewCharacteristics={this.state.characteristics}
              widgetName='RelatedProducts'
              productData={this.state.productData}
              invokeAddToOutfits={this.invokeAddToOutfits}
              addOutfit={this.state.addOutfit} />
          </div>
          <div className='component-2' id='reviews'>
            <RatingsReviews {...this.state} getReviews={this.getReviews} widgetName='RatingsReviews' />
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
