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
      page: 1,
      count: 2,
      reviews: [],
      sort: null,
      updated: false,
      addOutfit: false
    };

    this.updateOverviewProduct = this.updateOverviewProduct.bind(this);
    this.getReviews = this.getReviews.bind(this);
    this.getMetadata = this.getMetadata.bind(this);
    this.getProductData = this.getProductData.bind(this);
    this.invokeAddToOutfits = this.invokeAddToOutfits.bind(this);
  }


  componentDidMount() {
    this.getReviews();
    this.getMetadata();
    this.setPathname();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.id !== this.state.id) {
      this.getReviews();
      this.getMetadata();
    }
    // || this.state.product_id === '47421'
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
      relatedItems: [],
      product_id: newProductIDString,
      id: newProductID,
      count: 2
    })
    // console.log('prod id', this.state.product_id)
    //sets a new url product when clicking on related item
    // window.location.pathname = newProductIDString;
    window.history.pushState(null, null, `/${newProductID}`);
  }

  getReviews(sortValue) {
    let params;
    if (sortValue !== undefined) {
      params = {
        product_id: this.state.id,
        count: this.state.count - 2,
        sort: sortValue
      };
    } else if (sortValue === undefined) {
      params = {
        product_id: this.state.id,
        count: this.state.count,
        sort: this.state.sort
      };
    }

    axios.get('/reviews/getAllReviews', { params })
      .then(result => {
        // if More Reviews button is clicked
        if (sortValue === undefined) {
          this.setState({
            count: this.state.count + 2,
            reviews: result.data.results
          });
          // if Sort option is selected
        } else if (sortValue !== undefined) {
          this.setState({ reviews: result.data.results });
          console.log('sort success', sortValue);
        }
      })
      .catch(err => { console.log(err); });
  }

  setPathname() {
    //redirects to the product in the url, invoked in componentDidMount
    let pathname = window.location.pathname.split('/')[1] || '47421';
    let pathnameNumber = Number(pathname);
    this.setState({
      product_id: pathname,
      id: pathnameNumber
    })
  }

  getMetadata() {
    axios.get('/reviews/meta/getMeta', { params: { product_id: this.state.id } })
      .then(result => {
        console.log('RESULT DATA', result.data);
        //let recommend = (result.data.recommended !== null) ? (result.data.recommended).toFixed(2) : null;

        this.setState({
          ratings: result.data.average,
          characteristics: result.data.characteristics,
          recommended: result.data.recommend,
          updated: true
        });
      })
      .catch(err => { console.log(err); });
  }

  render() {
    // console.log(this.state.addOutfit)
    if (this.state.updated === true) {
      return (
        <div className='app-body'>
          <div className='component-1'>
            <Overview
              product_id={this.state['product_id']}
              getProductData={this.getProductData}
              widgetName='Overview'
              invokeAddToOutfits={this.invokeAddToOutfits}
            />
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
              addOutfit={this.state.addOutfit}
              product_id={this.state.product_id} />
          </div>
          <div className='component-2'>
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
