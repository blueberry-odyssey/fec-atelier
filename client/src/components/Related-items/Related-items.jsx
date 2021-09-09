import React from 'react';
import './Related-items.css';
import ProductCarousel from '../ProductCarousel/ProductCarousel'

export default class RelatedItems extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <>
        <div className='related-items'>This is the start of Related Items and Comparisons</div>
        <ProductCarousel/>
        <ProductCarousel/>
      </>
    )
  }
}
