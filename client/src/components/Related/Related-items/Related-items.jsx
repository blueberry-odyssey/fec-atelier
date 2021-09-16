import React from 'react';
import './Related-items.css';
import axios from 'axios';
import ProductCarousel from '../Product-Carousel/Product-Carousel.jsx';

export default class RelatedItems extends React.Component {
  constructor(props) {
    super(props)
    //state id is placeholder var for all related products
    this.state = {
    }

  }

  // getAllRelatedProducts(productIDArray) {
  //   axios.get('/relatedProducts', { params: {productIDArray, styles: '' }})
  //     .then(data => {
  //       this.setState({
  //         relatedItems: data.data
  //       })
  //     })
  //     .catch(err => { throw err; })
  //     .then(() => {
  //       axios.get('/relatedProducts', { params: {productIDArray, styles: '/styles' }})
  //         .then(styleData => {
  //           console.log('relatedStyle Data', styleData);
  //           this.setState({
  //             relatedStyleData: styleData.data
  //           })
  //         })
  //         .catch(err => { throw err; })
  //     })
  // }

  // getAllRelatedProductStyles(productIDArray) {
  //   axios.get('/relatedProducts', {params: productIDArray, styles: true})
  //     .then(data => {
  //       console.log('relatedStyle Data', data);
  //     })
  //     .catch(err => {throw err;})
  // }

  render() {
    let {relatedItems, styleData} = this.props;
    return (
      <>
        <ProductCarousel relatedItems={relatedItems} styles={styleData}/>
      </>
    )
  }
}
