import React from 'react';
import './Related-items.css';
import axios from 'axios';
import ProductCarousel from '../Product-Carousel/Product-Carousel.jsx';

export default class RelatedItems extends React.Component {
  constructor(props) {
    super(props)
    //state id is placeholder var for all related products
  }

  render() {
    // let {relatedItems, styleData} = this.props;
    // console.log('style data in main', this.props);
    return (
      <>
        <h1>Related Products</h1>
        <ProductCarousel
        relatedItems={this.props.relatedItems}
        styleData={this.props.styleData}
        updateOverviewProduct={this.updateOverviewProduct}/>
      </>
    )
  }
}
