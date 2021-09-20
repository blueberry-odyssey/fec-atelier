import React from 'react';
import './Related-Products.css';
import axios from 'axios';
import Carousel from '../Carousel/Carousel.jsx';

export default class RelatedProducts extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let {relatedItems, styleData, updateOverviewProduct} = this.props;
    // console.log('style data in main', this.props);
    return (
      <>
        <h1>Related <span id='pink'>Products</span></h1>
        <Carousel
        relatedItems={relatedItems}
        styleData={styleData}
        updateOverviewProduct={updateOverviewProduct}/>
        <h1>Make Your Fit</h1>
        <Carousel
        relatedItems={relatedItems}
        updateOverviewProduct={updateOverviewProduct}/>
      </>
    )
  }
}
