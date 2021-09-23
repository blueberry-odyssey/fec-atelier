import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import ProductInfo from './Product-Info/ProductInfo.jsx';
import StyleSelector from './Style-Selector/StyleSelector.jsx';
import ImageGallery from './Image-Gallery/ImageGallery.jsx';

class Overview extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      productData: {},
      defaultStylePhotos: [],
      selectedStylePhotos: []
      // styles: [],
      // cartData: {}
    };
    this.getProductDetails = this.getProductDetails.bind(this);
    this.setDefaultPhotos = this.setDefaultPhotos.bind(this);
    this.setSelectedPhotos = this.setSelectedPhotos.bind(this);
    // this.getStyles = this.getStyles.bind(this);
  }

  componentDidMount() {
    this.getProductDetails(this.props['product_id']);
    // this.getStyles(this.props['product_id']);
  }

  getProductDetails(productId) {
    let context = this;
    //console.log(context.props['product_id']);
    axios({
      method: 'get',
      url: '/products/getProductDetails',
      params: { product_id: productId }
    })
      .then(function (productData) {
        //console.log('productData: ', productData.data);
        context.setState({ productData: productData.data });
        context.props.getProductData(productData.data);
      })
      .catch(function (err) {
        console.log('error in getProductDetails index.jsx: ', err);
      })
  }

  setDefaultPhotos(photos) {
    this.setState({ defaultStylePhotos: photos });
  }

  setSelectedPhotos(photos) {
    this.setState({ selectedStylePhotos: photos });
  }


  // getStyles(productId) {
  //   let context = this;
  //   axios({
  //     method: 'get',
  //     url: '/products/getStyles',
  //     params: { product_id: productId }
  //   })
  //     .then(function (styles) {
  //       console.log('styles array: ', styles);
  //       context.setState({ styles: styles.data });
  //     })
  //     .catch(function (err) {
  //       console.log('err in getStyles overview.jsx: ', err);
  //     })
  // }

  //invoke ProductInfo, StyleSelector, Cart, and ImageGallery Components
  render() {
    //console.log('Overview.jsx props product_id', this.props);
    return (
      <div>
        <h1 className='title'>blueberry odyssey</h1>
        <p className='site-message'>SALE! 50% OFF SELECT ITEMS!</p>
        <div className='overview-container'>
          <div className='image-gallery'>
            {this.state.defaultStylePhotos && <ImageGallery
              defaultPhotos={this.state.defaultStylePhotos}
              selectedPhotos={this.state.selectedStylePhotos} />}
          </div>

          <div className='product-details'>
            <ProductInfo productData={this.state.productData} />
            <StyleSelector
              product_id={this.props['product_id']}
              setDefaultPhotos={this.setDefaultPhotos}
              setSelectedPhotos={this.setSelectedPhotos} />
          </div>
        </div>
      </div>
    )
  }
}

// Overview.propTypes = {
//   product_id: PropTypes.string.isRequired
// };

export default Overview;