import React from 'react';

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
      <div className='image'>
        {this.state.selectedPhotos.length > 0 ?
          <img src={this.state.selectedPhotos[0].url}></img> :
          this.state.defaultPhotos.length > 0 && <img src={this.state.defaultPhotos[0].url}></img>}
      </div>
    )
  }
}


export default ImageGallery;