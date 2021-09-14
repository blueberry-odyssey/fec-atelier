import React from 'react';
import './Related-items.css';
import axios from 'axios';

export default class RelatedItems extends React.Component {
  constructor(props) {
    super(props)
    //state id is placeholder var for all related products
    this.state = {
      id: 47421,
      relatedItems: []
    }
  }
  componentDidMount() {
    axios.get('/findRelatedItems', { params: { id: this.state.id } })
      .then(result => {
        console.log('client items', result)
        this.getAllRelatedProductStyles(result)
      })
      .catch(err => { throw err; })
  }

  getAllRelatedProducts () {
    axios.get('/relatedProducts', {params: productIDArray})
      .then(data => {
        console.log('relatedProdcuts Data', data);
      })
      .catch(err => {throw err;})
  }

  getAllRelatedProductStyles(productIDArray) {
    axios.get('/relatedProducts', {params: productIDArray, styles: true})
      .then(data => {
        console.log('relatedStyle Data', data);
      })
      .catch(err => {throw err;})
  }

  render() {
    return (
      <>
        <div className='related-items'>This is the start of Related Items and Comparisons</div>
      </>
    )
  }
}
