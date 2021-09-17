import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import ProductInfo from './Product-Info/ProductInfo.jsx';
import StyleSelector from './Style-Selector/StyleSelector.jsx';
import Cart from './Cart/Cart.jsx';
import ImageGallery from './Image-Gallery/ImageGallery.jsx';

class Overview extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.getProductDetails = this.getProductDetails.bind(this);
  }

  componentDidMount() {
    this.getProductDetails();
  }

  getProductDetails() {
    let context = this;
    console.log(context.props['product_id']);
    axios({
      method: 'post',
      url: '/products/getProductDetails',
      data: { product_id: context.props['product_id'] }
    })
      .then(function (productData) {
        console.log('productData: ', productData.data);
        context.setState(productData.data);
      })
      .catch(function (err) {
        console.log('error in getProductDetails index.jsx: ', err);
      })
  }

  //invoke ProductInfo, StyleSelector, Cart, and ImageGallery Components
  render() {
    console.log('Overview.jsx props product_id', this.props);
    return (
      <div>
        <h1 className='title'>blueberry odyssey</h1>
        <p className='site-message'>SALE! 50% OFF SELECT ITEMS!</p>
        <div className='overview-container'>
          <div className='image-gallery'>
            <ImageGallery />
          </div>

          <div className='product-details'>
            <ProductInfo productData={this.state} />
            <StyleSelector />
            <Cart />
          </div>
        </div>
      </div>
    )
  }
}

Overview.propTypes = {
  product_id: PropTypes.string.isRequired
};

export default Overview;