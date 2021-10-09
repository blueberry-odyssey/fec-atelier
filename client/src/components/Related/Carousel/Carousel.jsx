import React from 'react';
import './Carousel.css';
import RelatedCarousel from '../Related-Carousel/Related-Carousel.jsx';
import OutfitCarousel from '../Outfit-Carousel/Outfit-Carousel.jsx';

export default class Carousel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      translate: 0,
      leftHidden: 'hidden',
      rightHidden: 'visible',
      maxSlide: 0,
    }
    this.moveLeft = this.moveLeft.bind(this);
    this.moveRight = this.moveRight.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log('how many', prevProps, this.props)
    if (this.props.relatedItems !== prevProps.relatedItems) {
      this.setState({
        maxSlide: this.props.relatedItems.length * 240 - 900,
        translate: 0
      })
    }
    if (this.state.translate !== prevState.translate && Math.abs(this.state.translate) >= this.state.maxSlide) {
      this.setState({
        rightHidden: 'hidden'
      })
    }
  }

  moveLeft() {
    if (this.state.translate >= -120) {
      this.setState({
        translate: 0,
        rightHidden: 'visible',
        leftHidden: 'hidden'
      })
    } else {
      this.setState({
        translate: this.state.translate + 240,
        rightHidden: 'visible'
      })
    }
    if (this.state.translate == 0) {
      this.setState({
        leftHidden: 'hidden'
      })
    }
  }

  moveRight() {
    if (this.state.translate < 0) {
      this.setState({
        translate: this.state.translate - 240,
        leftHidden: 'visible'
      })
    } else {
      this.setState({
        translate: this.state.translate - 120,
        leftHidden: 'visible'
      })
    }
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
    return (
      <div className='carousel-container'>
        <button
          aria-label='scroll-left'
          style={{ 'visibility': this.state.leftHidden }}
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
              overviewCharacteristics={overviewCharacteristics}
              translate={this.state.translate} />
          }
        </div>
        <button
          aria-label='scroll-right'
          className='right-button'
          style={{ 'visibility': this.state.rightHidden }}
          onClick={this.moveRight}>
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
    )
  }
};