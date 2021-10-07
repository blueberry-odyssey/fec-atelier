import React from 'react';
import axios from 'axios';

export default class ImageUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      count: 0,
      disabled: false,
      name: '',
      path: '',
      file: '',
      fileName: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.imageUploader = this.imageUploader.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({
      file: e.target.files[0],
      fileName: e.target.files[0].name
    })
  }

  imageUploader(e) {
    e.preventDefault();

    let images = e.target.files;

    const fd = new FormData();
    fd.append('image', this.state.file);
    fd.append('name', this.state.fileName);

    axios.post('http://localhost:3000/reviews/images', fd, {
      headers: { 'Content-Type': 'multipart/form-data' }
    })
    .then(res => {
      let { fileName, filePath } = res.data;
      this.setState({ name: fileName, path: filePath });

      let key = res.data.imagePath.substr(8);
      let photo = 'https://fec-atelier.s3.us-east-2.amazonaws.com/' + key;

      if (this.state.count <= 5) {
        this.state.photos.push(photo);
        this.setState({ count: this.state.count + 1 });
        this.props.getPhotos(this.state.photos);
      }
    })
    .catch(err => { console.log('image upload failed'); });
  }

  render() {
    if (this.state.photos.length < 6) {
      return (
        <div>
          <label className='image-uploader' name='images'>Photos:</label>
          <input className='image-select' type='file' name='images' accept='image/*' onChange={this.handleChange} multiple></input>
          <input className='image-upload-btn' type='submit' value='Upload' onClick={this.imageUploader}></input><br/>
          {this.state.photos.map(image => (
            <img className='form-image' key={image} src={image} />
          ))}
        </div>
      )
    } else if (this.state.count === 5) {
      return (
        <div>
          <label className='image-uploader' name='images'>Photos:</label>
          <p>Maximum reached</p><br/>
          {this.state.photos.map(image => (
            <img className='form-image' key={image} src={image} />
          ))}
        </div>
      )
    } else {
      return (
        <div>
          <label className='image-uploader' name='images'>Photos:</label>
          <input type='file' name='images' accept='image/*' onChange={this.handleChange} multiple></input>
          <input type='submit' value='Upload' onClick={this.imageUploader}></input>
        </div>
      )
    }
  }
}