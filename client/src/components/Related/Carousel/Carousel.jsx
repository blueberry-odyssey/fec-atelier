import React from 'react';
import './Carousel.css';
import RelatedCarousel from '../Related-Carousel/Related-Carousel.jsx';
import OutfitCarousel from '../Outfit-Carousel/Outfit-Carousel.jsx';

export default class Carousel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      translate: 0,
      hidden: 'visible'
    }
    this.moveLeft = this.moveLeft.bind(this);
    this.moveRight = this.moveRight.bind(this);
  }

  moveLeft() {
    if (this.state.translate === 0) {
      return;
    }
    this.setState({
      translate: this.state.translate + 500
    })
  }

  moveRight() {
    this.setState({
      translate: this.state.translate - 500
    })
  }

  render() {
    this.state.translate === 0 ? this.state.hidden = 'hidden' : this.state.hidden = 'visible';
    const {
      addOutfit,
      invokeAddToOutfits,
      productData,
      relatedItems,
      styleData,
      updateOverviewProduct,
      overviewCharacteristics } = this.props;
    // console.log('style in carousel', updateOverviewProduct);
    if (styleData) {
      return (
        <div className='carousel-container'>
          <button
          style={{'visibility': this.state.hidden}}
          id='left-button'
          onClick={this.moveLeft}><i className="fas fa-chevron-right"></i></button>
          <div className='carousel-slider'>
              <RelatedCarousel
              styleData={styleData}
              relatedItems={relatedItems}
              updateOverviewProduct={updateOverviewProduct}
              overviewCharacteristics={overviewCharacteristics}
              translate={this.state.translate}/>
          </div>
          <button id='right-button' onClick={this.moveRight}><i className="fas fa-chevron-right"></i></button>
        </div>
      )
    } else {
      return (
        <div className='carousel-container'>
          <button
          style={{'visibility': this.state.hidden}}
          id='left-button'
          onClick={this.moveLeft}><i className="fas fa-chevron-right"></i></button>
          <div className='carousel-slider'>
            <div>
              <OutfitCarousel
              addOutfit={addOutfit}
              invokeAddToOutfits={invokeAddToOutfits}
              productData={productData}
              updateOverviewProduct={updateOverviewProduct}
              overviewCharacteristics={overviewCharacteristics} />
            </div>
          </div>
          <button id='right-button' onClick={this.moveRight}><i className="fas fa-chevron-right"></i></button>
        </div>
      )
    }
  }
};