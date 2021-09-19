import React from 'react';
import './Related-Carousel.css';
import RelatedCarousel from '../Related-Carousel/Related-Carousel.jsx';
import OutfitCarousel from '../Outfit-Carousel/Outfit-Carousel.jsx';

export default class Carousel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      translate: 0
    }
    this.moveLeft = this.moveLeft.bind(this);
    this.moveRight = this.moveRight.bind(this);
  }

  moveLeft() {
    this.setState({
      translate: this.state.translate - 500
    })
  }

  moveRight() {
    if (this.state.translate === 0) {
      return;
    }
    this.setState({
      translate: this.state.translate + 500
    })
  }

  render() {
    const { relatedItems, styleData } = this.props;
    console.log('style in carousel', styleData);
    if (styleData) {
      return (
        <div className='carousel-container'>
          <button id='left-button' onClick={this.moveLeft}><i className="fas fa-chevron-right"></i></button>
          <div className='carousel-slider'>
            <div className='carousel' style={{ 'transform': `translateX(${this.state.translate}px)` }}>
              <RelatedCarousel styleData={styleData} relatedItems={relatedItems}/>
            </div>
            <div>
              <OutfitCarousel/>
            </div>
          </div>
          <button id='right-button' onClick={this.moveRight}><i className="fas fa-chevron-right"></i></button>
        </div>
      )
    } else {
      return (
        <div className='carousel-container'>
          <button id='left-button' onClick={this.moveLeft}><i className="fas fa-chevron-right"></i></button>
          <div className='carousel-slider'>
            <div>
              <OutfitCarousel/>
            </div>
          </div>
          <button id='right-button' onClick={this.moveRight}><i className="fas fa-chevron-right"></i></button>
        </div>
      )
    }
  }
};