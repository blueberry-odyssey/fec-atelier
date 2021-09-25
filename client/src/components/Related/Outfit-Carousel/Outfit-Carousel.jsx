import React from 'react';
import './Outfit-Carousel.css';
import RelatedProduct from '../Related-Product/Related-Product.jsx';
import axios from 'axios';

export default class OutfitCarousel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      outfits: [],
      outfitIndex: 1,
      styleData: null,
      invokeHandleClick: false
    }
    this.addedOutfits = window.localStorage;
    this.handleAddClick = this.handleAddClick.bind(this);
    this.removeOutfit = this.removeOutfit.bind(this);
  }

  componentDidMount() {
    this.showOutfits();
  }

  componentDidUpdate() {
    if (this.props.productData && !this.state.styleData) {
      axios.get('/products/relatedProductsAndStyles', { params: { productIDArray: [this.props.productData.id], styles: '/styles' } })
        .then(styleData => {
          this.setState({
            styleData: styleData.data[0]
          })
        })
        .catch(err => { throw err; });
    }
    if (this.props.addOutfit) {
      this.handleAddClick();
      this.props.invokeAddToOutfits(false);
    }
  }

  showOutfits() {
    const outfitsToAdd = [];
    console.log('hizzur', this.addedOutfits);
    if (this.addedOutfits && this.addedOutfits.length) {
      for (let key in this.addedOutfits) {
        if (isNaN(Number(key))) {
          continue;
        }
        let retrievedData = this.addedOutfits.getItem(key);
        let outfitData = JSON.parse(retrievedData);
        let styleData = outfitData[0];
        let productData = outfitData[1];
        // console.log('styleData', styleData, 'product:', productData);
        outfitsToAdd.push(<RelatedProduct
          styleData={styleData}
          product={productData}
          key={key}
          inOutfit={true}
          removeOutfit={this.removeOutfit}
          updateOverviewProduct={this.props.updateOverviewProduct}
          currentProduct={key} />)
      }
    }
    this.setState({
      outfits: outfitsToAdd
    })
  }

  handleAddClick() {
    let outfitData = JSON.stringify([this.state.styleData, this.props.productData]);
    this.addedOutfits.setItem(this.props.productData.id, outfitData);
    this.showOutfits();
  }

  removeOutfit(key) {
    this.addedOutfits.removeItem(key)
    console.log('we gotta remove')
    this.showOutfits();
  }

  render() {
    const { translate, productData } = this.props;
    // console.log('style in carousel', productData, this.state.styleData);
    return (
      <div className='carousel' style={{ 'transform': `translateX(${translate}px)` }}>
        <div onClick={this.handleAddClick} id='add-button' className='each-product'>add +</div>
        {this.state.outfits}
      </div>
    )
  }
};