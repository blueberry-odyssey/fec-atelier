import React from 'react';
import './Product-Carousel.css';
import RelatedProduct from '../Related-Product/Related-Product.jsx';

export default class ProductCarousel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      translate: 0
    }
    this.moveLeft = this.moveLeft.bind(this);
    this.moveRight = this.moveRight.bind(this);
  }

  moveLeft () {
    this.setState({
      translate: this.state.translate - 50
    })
  }
  moveRight () {
    this.setState({
      translate: this.state.translate + 50
    })
  }

  render() {
    const { relatedItems, styles} = this.props;
    console.log('style in carousel', styles);
    return (
      <div className='carousel-container'>
        <h1>Related Products</h1>
        <button onClick={this.moveLeft}>Go Left</button>
        <div className='carousel' style={{ 'transform': `translateX(${this.state.translate}px)` }}>
          {relatedItems.map((product, idx) => {
            return <RelatedProduct key={product.id} product={product} styleData={styles[idx]}/>
          })}
        </div>
        <button onClick={this.moveRight}>Go Right</button>
      </div>
    )
  }

};