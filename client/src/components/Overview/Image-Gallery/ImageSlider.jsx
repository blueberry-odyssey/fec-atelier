import React from 'react';
import ThumbnailSlider from './ThumbnailSlider.jsx';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import { FaArrowAltCircleLeft } from 'react-icons/fa';

//props.images is an array of object with url and thumbnail url
class ImageSlider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      length: 0,
      currentIndex: 0
    };

    this.prevImage = this.prevImage.bind(this);
    this.nextImage = this.nextImage.bind(this);
    this.showImageAtIndex = this.showImageAtIndex.bind(this);
  }

  static getDerivedStateFromProps(props, state) {
    return {
      length: props.images.length
    }
    return null;
  }

  //left button should decrease currentIndex
  prevImage() {
    if (this.state.currentIndex === 0 ?
      this.setState({ currentIndex: this.state.length - 1 }) :
      this.setState({ currentIndex: this.state.currentIndex - 1 }));
  }

  //right button should increase currentIndex
  nextImage() {
    if (this.state.currentIndex === this.state.length - 1 ?
      this.setState({ currentIndex: 0 }) :
      this.setState({ currentIndex: this.state.currentIndex + 1 }));
  }

  //function that changes the current index, pass down to thumbnail slider
  showImageAtIndex(selectedIndex) {
    this.setState({ currentIndex: selectedIndex });
  }

  render() {
    // console.log(this.state.currentIndex);
    return (
      <>
        <div>
          <FaArrowAltCircleLeft className='gallery-leftBtn' onClick={this.prevImage} />
          <FaArrowAltCircleRight className='gallery-rightBtn' onClick={this.nextImage} />
          {this.props.images.map((image, index) => {
            if (index === this.state.currentIndex) {
              return (
                <img
                  src={image.url}
                  key={index}
                  className='image'
                  onClick={() => {
                    //clicking the image should expand the image gallery component over the product-info component
                  }}>
                </img>
              );
            }
          })}
        </div>

        <ThumbnailSlider
          images={this.props.images}
          currentIndex={this.state.currentIndex}
          showImageAtIndex={this.showImageAtIndex}
        />

      </>
    )
  }
}

export default ImageSlider;