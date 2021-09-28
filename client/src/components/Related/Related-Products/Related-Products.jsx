import React from 'react';
import './Related-Products.css';
import axios from 'axios';
import Carousel from '../Carousel/Carousel.jsx';
import UpdatedComponent from '../../interactions.jsx';

class RelatedProducts extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {
      addOutfit,
      productData,
      relatedItems,
      styleData,
      updateOverviewProduct,
      overviewCharacteristics,
      invokeAddToOutfits } = this.props;
    // console.log('style data in main', overviewCharacteristics);
    return (
      <div className='related'>
        <h1>Related <span id='pink'>Products</span></h1>
        <Carousel
          relatedItems={relatedItems}
          styleData={styleData}
          updateOverviewProduct={updateOverviewProduct}
          overviewCharacteristics={overviewCharacteristics} />
        <h1>Make Your Fit</h1>
        <Carousel
          productData={productData}
          relatedItems={relatedItems}
          updateOverviewProduct={updateOverviewProduct}
          invokeAddToOutfits={invokeAddToOutfits}
          addOutfit={addOutfit}/>
      </div>
    )
  }
}

export default UpdatedComponent(RelatedProducts);
