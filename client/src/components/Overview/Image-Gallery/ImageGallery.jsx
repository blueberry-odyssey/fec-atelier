import React from 'react';
import ImageSlider from './ImageSlider.jsx';
import ExpandedView from './ExpandedView.jsx';

class ImageGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultPhotos: [],
      selectedPhotos: [],
      isOpen: false,
      length: 0,
      currentIndex: 0
    };

    this.openView = this.openView.bind(this);
    this.closeView = this.closeView.bind(this);
    this.prevImage = this.prevImage.bind(this);
    this.nextImage = this.nextImage.bind(this);
    this.showImageAtIndex = this.showImageAtIndex.bind(this);
  }

  openView() {
    this.setState({ isOpen: true });
  }

  closeView() {
    this.setState({ isOpen: false });
  }

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

  static getDerivedStateFromProps(props, state) {
    return {
      defaultPhotos: props.defaultPhotos,
      selectedPhotos: props.selectedPhotos,
      length: props.defaultPhotos.length
    };
    // Return null to indicate no change to state.
    return null;
  }

  render() {
    // console.log(this.state.defaultPhotos[0]);
    if (this.state.isOpen) {
      return (
        <div className='image-container-expanded'>
          {this.state.selectedPhotos.length > 0 ?
            <ExpandedView
              images={this.state.selectedPhotos}
              closeView={this.closeView}
              prevImage={this.prevImage}
              nextImage={this.nextImage}
              showImageAtIndex={this.showImageAtIndex}
              currentIndex={this.state.currentIndex}
            />
            :
            this.state.defaultPhotos.length > 0 &&
            <ExpandedView
              images={this.state.defaultPhotos}
              closeView={this.closeView}
              prevImage={this.prevImage}
              nextImage={this.nextImage}
              showImageAtIndex={this.showImageAtIndex}
              currentIndex={this.state.currentIndex}
            />}
        </div>
      )
    } else {
      return (
        <div className='image-container'>
          {this.state.selectedPhotos.length > 0 ?
            <ImageSlider
              images={this.state.selectedPhotos}
              openView={this.openView}
              prevImage={this.prevImage}
              nextImage={this.nextImage}
              showImageAtIndex={this.showImageAtIndex}
              currentIndex={this.state.currentIndex}
            />
            :
            this.state.defaultPhotos.length > 0 &&
            <ImageSlider
              images={this.state.defaultPhotos}
              openView={this.openView}
              prevImage={this.prevImage}
              nextImage={this.nextImage}
              showImageAtIndex={this.showImageAtIndex}
              currentIndex={this.state.currentIndex}
            />}
        </div>
      )
    }
  }
}


export default ImageGallery;