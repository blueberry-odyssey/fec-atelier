import React from 'react';
import './Related-Products.css';
import axios from 'axios';
import Carousel from '../Carousel/Carousel.jsx';

export default class RelatedProducts extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let {relatedItems, styleData} = this.props;
    // console.log('style data in main', this.props);
    return (
      <>
        <h1>Related</h1> <h1 id='pink'>Products</h1>
        <Carousel
        relatedItems={relatedItems}
        styleData={styleData}
        updateOverviewProduct={this.updateOverviewProduct}/>
        <h1>Make Your Fit</h1>
        <Carousel
        relatedItems={relatedItems}
        styleData={styleData}
        updateOverviewProduct={this.updateOverviewProduct}/>
      </>
    )
  }
}
