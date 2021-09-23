import React from 'react';
import './Outfit-Carousel.css';
import RelatedProduct from '../Related-Product/Related-Product.jsx';
import axios from 'axios';

export default class OutfitCarousel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      outfits: [],
      // productData: this.props.productData,
      styleData: null
    }
    this.addedOutfits = window.localStorage;
    this.handleAddClick = this.handleAddClick.bind(this);
  }

  componentDidUpdate () {
    if (this.props.productData.name && !this.state.styleData) {
      axios.get('/products/relatedProductsAndStyles', { params: { productIDArray: [this.props.productData.id], styles: '/styles' } })
      .then(styleData => {
        this.setState({
          styleData: styleData.data[0]
        })
        // console.log('stylL;KDF;LJA;', this.state.styleData)
      })
      .catch(err => { throw err; });
    }
  }

  showOutfits () {
    const outfitsToAdd = [];
    for (let i = 1; i < this.addedOutfits.length; i += 2) {
      let styleData = JSON.parse(this.addedOutfits.getItem(i));
      let productData = JSON.parse(this.addedOutfits.getItem(i+1));
      console.log('styleData', styleData, 'product:', productData);
      outfitsToAdd.push(<RelatedProduct styleData={styleData} product={productData} key={i}/>)
    }
    this.setState({
      outfits: outfitsToAdd
    })
  }

  handleAddClick() {
    this.addedOutfits.setItem('1', JSON.stringify(this.state.styleData))
    this.addedOutfits.setItem('2', JSON.stringify(this.props.productData))
    // console.log('my outfits', this.addedOutfits)
    this.showOutfits();
  }

  render() {
    const { translate, productData } = this.props;
    // console.log('style in carousel', productData, this.state.styleData);
    return (
      <div className='carousel' style={{ 'transform': `translateX(${translate}px)` }}>
        <div onClick={this.handleAddClick} id='add-button' className='each-product'>add +</div>;
        {this.state.outfits}
      </div>
    )
  }
};