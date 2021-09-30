import React from 'react';
import ImageSlider from './ImageSlider.jsx';

class ImageGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultPhotos: [],
      selectedPhotos: []
    };
  }

  static getDerivedStateFromProps(props, state) {
    return {
      defaultPhotos: props.defaultPhotos,
      selectedPhotos: props.selectedPhotos
    };
    // Return null to indicate no change to state.
    return null;
  }

  render() {
    // console.log(this.state.defaultPhotos[0]);
    return (
      <div>
        {this.state.selectedPhotos.length > 0 ?
          <ImageSlider images={this.state.selectedPhotos} /> :
          this.state.defaultPhotos.length > 0 && <ImageSlider images={this.state.defaultPhotos} />}
      </div>
    )
  }
}


export default ImageGallery;