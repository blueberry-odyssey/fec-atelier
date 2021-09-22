import React from 'react';
import './Outfit-Carousel.css';
import RelatedProduct from '../Related-Product/Related-Product.jsx';
import axios from 'axios';

export default class OutfitCarousel extends React.Component {
  constructor(props) {
    super(props)
    const addButton = <div onClick={this.handleAddClick} key='1' id='add-button' className='each-product'>add +</div>;
    this.state = {
      outfits: [addButton]
    }
  }

  componentDidMount() {

  }

  handleAddClick() {
    axios('/products/getProductDetails', { data: { product_id: id.toString()} })
    .then((result) => {
      console.log('get stuff for outfit', result)
    })
    .catch(err => {
      throw err;
    })
    axios.get('/products/relatedProductsAndStyles', { params: { productIDArray, styles: '/styles' } })
      .then(styleData => {
        console.log('relatedStyle Data', styleData);
        this.setState({
          styleData: styleData.data
        })
      })
      .catch(err => { throw err; });
  }

  getProductData() {
    axios.post('/products/getProductDetails', { data: { product_id: context.props['product_id'] } })
      .then(function (productData) {
        console.log('productData: ', productData.data);
      })
      .catch(err => { throw err; })
  }

  render() {
    // console.log('style in carousel', styleData);
    let { translate } = this.props;
    return (
      <div className='carousel' style={{ 'transform': `translateX(${translate}px)` }}>
        {this.state.outfits}
      </div>
    )
  }
};