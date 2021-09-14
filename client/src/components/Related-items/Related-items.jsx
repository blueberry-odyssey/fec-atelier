import React from 'react';
import './Related-items.css';
import axios from 'axios';
import ProductCarousel from '../Product-Carousel/Product-Carousel.jsx';

export default class RelatedItems extends React.Component {
  constructor(props) {
    super(props)
    //state id is placeholder var for all related products
    this.state = {
      id: 47421,
      relatedItems: [],
      relatedStyleData: []
    }
  }

  componentDidMount() {
    axios.get('/findRelatedItems', { params: { id: this.state.id } })
      .then(result => {
        console.log('client items', result)
        this.getAllRelatedProducts(result)
      })
      .catch(err => { throw err; })
  }

  getAllRelatedProducts (productIDArray) {
    axios.get('/relatedProducts', {params: productIDArray})
      .then(data => {
        console.log('relatedProducts Data', data.data);
        this.setState({
          relatedItems: data.data
        })
      })
      .catch(err => {throw err;})

    // axios.get('/relatedProducts', {params: productIDArray, styles: true})
    //   .then(data => {
    //     console.log('relatedStyle Data', data);
    //   })
    //   .catch(err => {throw err;})
  }

  // getAllRelatedProductStyles(productIDArray) {
  //   axios.get('/relatedProducts', {params: productIDArray, styles: true})
  //     .then(data => {
  //       console.log('relatedStyle Data', data);
  //     })
  //     .catch(err => {throw err;})
  // }

  render() {
    return (
      <>
        <ProductCarousel relatedItems={this.state.relatedItems}/>
      </>
    )
  }
}
