import React from 'react';
import ProductInfo from './Product-Info/ProductInfo.jsx';
import StyleSelector from './Style-Selector/StyleSelector.jsx';
import Cart from './Cart/Cart.jsx';
import ImageGallery from './Image-Gallery/ImageGallery.jsx';

class Overview extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  //invoke ProductInfo, StyleSelector, Cart, and ImageGallery Components
  render() {
    return (
      <div>
        <h1>ATELIER OVERVIEW</h1>
        <ImageGallery />
        <ProductInfo />
        <StyleSelector />
        <Cart />
      </div>
    )
  }
}

export default Overview;