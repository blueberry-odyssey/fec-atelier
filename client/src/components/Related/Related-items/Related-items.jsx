import React from 'react';
import './Related-items.css';
import axios from 'axios';
import ProductCarousel from '../Product-Carousel/Product-Carousel.jsx';

export default class RelatedItems extends React.Component {
  constructor(props) {
    super(props)
    //state id is placeholder var for all related products
    this.state = {
    }
  }

  render() {
    let {relatedItems, styleData} = this.props;
    return (
      <>
        <ProductCarousel relatedItems={relatedItems} styles={styleData}/>
      </>
    )
  }
}
