import React from 'react';
import ThumbnailSlider from './ThumbnailSlider.jsx';
import ImageMagnify from './ImageMagnify.jsx';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import { FaArrowAltCircleLeft } from 'react-icons/fa';

class ExpandedView extends React.Component {
  constructor(props) {
    super(props);
    this.state = { zoomView: false };

    this.toggleZoomView = this.toggleZoomView.bind(this);
  }

  toggleZoomView() {
    this.setState({ zoomView: !this.state.zoomView });
  }

  render() {
    if (this.state.zoomView) {
      return (
        this.props.images.map((image, index) => {
          if (index === this.props.currentIndex) {
            // console.log('testing');
            return (
              <ImageMagnify src={image.url} key={index} toggleZoomView={this.toggleZoomView} />
            );
          }
        })
      )
    } else {
      return (
        <>
          <button onClick={this.props.closeView} className='expanded-view-exit-btn'>X</button>
          <div>
            <FaArrowAltCircleLeft className='gallery-leftBtn' onClick={this.props.prevImage} />
            <FaArrowAltCircleRight className='gallery-rightBtn' onClick={this.props.nextImage} />
            {this.props.images.map((image, index) => {
              if (index === this.props.currentIndex) {
                return (
                  <img
                    src={image.url}
                    key={index}
                    className='image-expanded'
                    onClick={this.toggleZoomView}
                  >
                  </img>
                );
              }
            })}
          </div>

          <ThumbnailSlider
            images={this.props.images}
            currentIndex={this.props.currentIndex}
            showImageAtIndex={this.props.showImageAtIndex}
          />

        </>
      );

    }
  }
}

export default ExpandedView;