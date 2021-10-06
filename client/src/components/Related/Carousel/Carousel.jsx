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
      translate: this.state.translate + 300
    })
  }

  moveRight() {
    let maxSlide = (this.props.relatedItems.length) * -300 + 900;
    if (this.state.translate <= maxSlide) {
      return;
    }
    this.setState({
      translate: this.state.translate - 300
    })
  }

  render() {
    const {
      addOutfit,
      invokeAddToOutfits,
      productData,
      relatedItems,
      styleData,
      updateOverviewProduct,
      overviewCharacteristics } = this.props;
    this.state.translate === 0 ? this.state.hidden = 'hidden' : this.state.hidden = 'visible';
    // console.log('style in carousel', JSON.stringify(relatedItems));
    return (
      <div className='carousel-container'>
        <button
          name='scroll-left'
          style={{ 'visibility': this.state.hidden }}
          className='left-button'
          onClick={this.moveLeft}>
          <i className="fas fa-chevron-right"></i>
        </button>
        <div className='carousel-slider'>
          {styleData
            ? <RelatedCarousel
              productData={productData}
              popupModal={this.popupModal}
              styleData={styleData}
              relatedItems={relatedItems}
              updateOverviewProduct={updateOverviewProduct}
              overviewCharacteristics={overviewCharacteristics}
              translate={this.state.translate} />
            : <OutfitCarousel
              addOutfit={addOutfit}
              invokeAddToOutfits={invokeAddToOutfits}
              productData={productData}
              updateOverviewProduct={updateOverviewProduct}
              overviewCharacteristics={overviewCharacteristics} />
          }
        </div>
        <button
          name='scroll-right'
          className='right-button'
          onClick={this.moveRight}>
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
    )
  }
};