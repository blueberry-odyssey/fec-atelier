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
    // const { relatedItems, styleData } = this.props;
    console.log('style in carousel', this.props.styleData);
    if (this.props.styleData) {
      return (
        <div className='carousel-container'>
          {/* <h1>Related Products</h1> */}
          <button id='left-button' onClick={this.moveLeft}><i class="fas fa-chevron-right"></i></button>
          <div className='carousel' style={{ 'transform': `translateX(${this.state.translate}px)` }}>
            {this.props.relatedItems.map((product, idx) => {
              return <RelatedProduct
                      key={product.id}
                      product={product}
                      styleData={this.props.styleData[idx]}
                      updateOverviewProduct={this.updateOverviewProduct}/>
            })}
          </div>
          <button id='right-button' onClick={this.moveRight}><i class="fas fa-chevron-right"></i></button>
          {/* <i class="fas fa-chevron-right"></i> */}
        </div>
      )
    }
  }
};