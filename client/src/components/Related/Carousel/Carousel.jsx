import React from 'react';
import './Carousel.css';
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
    const { relatedItems, styleData, updateOverviewProduct } = this.props;
    // console.log('style in carousel', updateOverviewProduct);
    if (styleData) {
      return (
        <div className='carousel-container'>
          <button id='left-button' onClick={this.moveLeft}><i className="fas fa-chevron-right"></i></button>
          <div className='carousel-slider'>
              <RelatedCarousel
              styleData={styleData}
              relatedItems={relatedItems}
              updateOverviewProduct={updateOverviewProduct}
              translate={this.state.translate}/>
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